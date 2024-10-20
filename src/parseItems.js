import parseString from './parseString.js'
import {mergeAttributes, normalizeAttributes} from './helpers.js'

const officialAttributeMap = {
  BoonDuration: 'Concentration',
  ConditionDamage: 'ConditionDamage',
  ConditionDuration: 'Expertise',
  CritDamage: 'Ferocity',
  Healing: 'HealingPower',
  Power: 'Power',
  Precision: 'Precision',
  Toughness: 'Toughness',
  Vitality: 'Vitality'
}

// Counts how many of each rune we have while parsing items
let runeCount

export default function parseItems (items) {
  let attributes = {}
  runeCount = {}
  items = [].concat(items)

  items.map(item => {
    attributes = mergeAttributes(attributes, parseItem(item))
  })

  return normalizeAttributes(attributes)
}

function parseItem (item) {
  let attributes = {}

  if (!item || !item.details) {
    return attributes
  }

  let details = item.details

  // Armor rating -> integer
  if (details.defense) {
    attributes.Armor = (attributes.Armor || 0) + details.defense
  }

  // Official attributes -> array of {attribute: 'type', modifier: value}
  if (details.infix_upgrade && details.infix_upgrade.attributes) {
    attributes = mergeAttributes(attributes, convertOfficialArray(details.infix_upgrade.attributes))
  }

  // Buff description (condition duration, ascended items, infusions) -> string
  if (details.infix_upgrade && details.infix_upgrade.buff) {
    attributes = mergeAttributes(attributes, parseString(details.infix_upgrade.buff.description, item.id))
  }

  // Rune buffs -> array of 6 strings, 1 per equipped rune count
  if (details.bonuses) {
    runeCount[item.id] = runeCount[item.id] !== undefined ? runeCount[item.id] + 1 : 0
    if (runeCount[item.id] <= 5) {
      attributes = mergeAttributes(attributes, parseString(details.bonuses[runeCount[item.id]]))
    }
  }

  // Selectable stats -> object of {type: value}
  if (item.stats) {
    attributes = mergeAttributes(attributes, convertOfficialMap(item.stats.attributes))
  }

  // Remove the resistance that some legacy items still have hardcoded in them.
  // They also have the agony infusions giving the actual resistance
  if (item.rarity === 'Ascended' && details.type !== 'Default') {
    delete attributes.AgonyResistance
  }

  return attributes
}

// Convert an array of {attribute: 'type', modifier: value} into a map
function convertOfficialArray (attributes) {
  let map = {}
  attributes.map(attribute => {
    let key = officialAttributeMap[attribute.attribute]
    map[key] = attribute.modifier
  })
  return map
}

// Convert a official map into correct attribute names
function convertOfficialMap (attributes) {
  let map = {}
  for (let attribute in attributes) {
    let key = officialAttributeMap[attribute]
    map[key] = attributes[attribute]
  }
  return map
}
