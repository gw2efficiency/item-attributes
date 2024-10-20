import GAME_DATA_ITEMS_CATEGORIES_STAT_INFUSIONS from '@gw2efficiency/game-data/items/categories/stat-infusions'

const statInfusionIds = GAME_DATA_ITEMS_CATEGORIES_STAT_INFUSIONS.map((x) => x.id)

const attributeStrings = {
  Power: ['Power', 'Kraft', 'Puissance', 'Potencia'],
  Toughness: ['Toughness', 'Zähigkeit', 'Robustesse', 'Dureza'],
  Vitality: ['Vitality', 'Vitalität', 'Vitalité', 'Vitalidad'],
  Precision: ['Precision', 'Präzision', 'Précision', 'Precisión'],
  Ferocity: ['Ferocity', 'Wildheit', 'Férocité', 'Ferocidad'],
  ConditionDamage: ['Condition Damage', 'Zustandsschaden', 'Dégâts par altération', 'Daño de Condición'],
  ConditionDuration: ['Condition Duration', 'Zustandsdauer', 'Durée d\'altération', 'Duración de condición'],
  HealingPower: ['Healing', 'Heilung', 'Heilkraft', 'Guérison', 'Poder de Curación'],
  BoonDuration: ['Boon Duration', 'Segensdauer', 'Durée d\'avantage', 'Duración de la Bendición'],
  AgonyResistance: ['Agony Resistance', 'Qual-Widerstand', 'Résistance à l\'agonie', 'Resistencia a la Agonía'],
  Concentration: ['Concentration', 'Konzentration', 'Concentration', 'Concentración'],
  Expertise: ['Expertise', 'Fachkenntnis', 'Expertise', 'Pericia'],
  CritChance: ['Critical Chance', 'kritische Trefferchance', 'Chance de coup critique', 'Probabilidad de daño crítico'],
  __AllStats__: ['to All Stats', 'auf alle Werte', 'Toutes les statistiques', 'a todas las estadísticas']
}

const allStatsAttributes = ['Power', 'Toughness', 'Vitality', 'Precision', 'Ferocity', 'ConditionDamage', 'HealingPower']

// Build regular expressions to match attributes out of strings. This monstrosity catches
// all possible languages and formats (number & text / text & number / percent signs / ...)
let attributeExpressions = {}
for (let key in attributeStrings) {
  let regexString = '(?:\\+ ?(\\d*) ?%? )?(?:' + attributeStrings[key].join('|') + ')(?: \\+ ?(\\d*) ?%?)?'
  attributeExpressions[key] = new RegExp(regexString, 'gi')
}

// Go through all the regular expressions matching the string
// and build a (somewhat) sane object of attributes
export default function parseString (string, id) {
  let agonyResistanceExpressions = {
    AgonyResistance: attributeExpressions.AgonyResistance
  }
  let attributes = {}

  for (let attribute in (statInfusionIds.includes(id) ? agonyResistanceExpressions : attributeExpressions)) {
    let matches = matchAll(attributeExpressions[attribute], string)
    let modifiedAttributes = (attribute !== '__AllStats__') ? [attribute] : allStatsAttributes

    // Update the attributes for this regex with the matched values
    matches.map(match => {
      let value = parseInt(match[1], 10) || parseInt(match[2], 10) || false
      if (!value) return

      modifiedAttributes.map(k => {
        attributes[k] = (attributes[k] || 0) + value
      })
    })
  }

  return attributes
}

// Get all matches of a regex in a string as an array
function matchAll (regex, string) {
  let match
  let matches = []
  while ((match = regex.exec(string)) !== null) {
    delete match['index']
    delete match['input']
    matches.push(match)
  }

  return matches
}
