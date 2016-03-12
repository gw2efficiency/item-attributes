const combinations = [
  {attributes: [['Power'], ['Precision', 'Ferocity']], text: 'Berserker'},
  {attributes: [['Precision'], ['Power', 'Ferocity']], text: 'Assassin'},
  {attributes: [['Power', 'Precision'], []], text: 'Celestial'}
]

function parseCombination (attributes) {
  attributes = normalizeAttributes(attributes)

  for (let i = 0; i !== combinations.length; i++) {
    if (equalAttributes(attributes, combinations[i].attributes)) {
      return combinations[i].text
    }
  }

  return false
}

// Get a representation showing the the main attribute and the
// secondary attributes of an item.
// {Precision: 85, Power: 126, Ferocity: 85}
// -> [['Power'], ['Precision', 'Ferocity']]
function normalizeAttributes (attributes) {
  let mainAttributes = []
  let maxValue

  for (let key in attributes) {
    if (!maxValue || attributes[key] > maxValue) {
      maxValue = attributes[key]
      mainAttributes = [key]
    } else if (attributes[key] === maxValue) {
      mainAttributes.push(key)
    }
  }

  let secondaryAttributes = Object.keys(attributes).filter(x => mainAttributes.indexOf(x) === -1)
  return [mainAttributes, secondaryAttributes]
}

// Deep compare two attribute arrays
function equalAttributes (needle, haystack) {
  return equalElements(needle[0], haystack[0]) && equalElements(needle[1], haystack[1])
}

// See if two arrays contain the same elements
function equalElements (needle, haystack) {
  let missingNeedle = needle.filter(n => haystack.indexOf(n) === -1)
  if (missingNeedle.length !== 0) {
    return false
  }

  let missingHaystack = haystack.filter(h => needle.indexOf(h) === -1)
  return missingHaystack.length === 0
}

module.exports = parseCombination
