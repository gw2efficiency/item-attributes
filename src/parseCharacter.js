import parseItems from './parseItems.js'
import {mergeAttributes} from './helpers.js'
import {
  scaledBaseAttributes,
  scaledBaseHealth,
  scaledAttributeBonus
} from './scaling.js'

const emptyAttributes = {
  Power: 0,
  Toughness: 0,
  Vitality: 0,
  Precision: 0,
  Ferocity: 0,
  Armor: 0,
  ConditionDamage: 0,
  ConditionDuration: 0,
  HealingPower: 0,
  BoonDuration: 0,
  AgonyResistance: 0,
  Concentration: 0,
  Expertise: 0,
  CritChance: 0,
  Health: 0,
  CritDamage: 0
}

export default function parseCharacter (level, profession, items) {
  let attributes = parseItems(items)

  // Make sure all attributes exist
  attributes = mergeAttributes({...emptyAttributes}, attributes)

  // Add character base attributes
  let baseAttributes = scaledBaseAttributes(level)
  attributes.Power += baseAttributes
  attributes.Toughness += baseAttributes
  attributes.Vitality += baseAttributes
  attributes.Precision += baseAttributes

  // Health is calculated out of a scaling base health and a flat bonus of vitality
  let baseHealth = scaledBaseHealth(level, profession)
  attributes.Health = Math.floor(baseHealth + 10 * attributes.Vitality)

  // Armor is the armor defense values and a flat bonus of toughness
  attributes.Armor += attributes.Toughness

  // Critical chance gets calculated using a scaling bonus of precision
  let baseCritChance = 0.04
  attributes.CritChance += baseCritChance + ((attributes.Precision - baseAttributes) / scaledAttributeBonus(level, 21)) / 100

  // Critical damage has a base of 150% and adds a scaling bonus of ferocity
  let baseCritDamage = 1.5
  attributes.CritDamage = baseCritDamage + ((attributes.Ferocity / scaledAttributeBonus(level, 15)) / 100)

  // Condition duration and boon duration get a scaling bonus of expertise / concentration
  attributes.ConditionDuration += (attributes.Expertise / scaledAttributeBonus(level, 15)) / 100
  attributes.BoonDuration += (attributes.Concentration / scaledAttributeBonus(level, 15)) / 100

  return attributes
}
