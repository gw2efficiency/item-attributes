const combinations = require('./staticCombinations.js')

function combinationAttributes (prefix) {
  for (let i = 0; i !== combinations.length; i++) {
    if (combinations[i].text.prefix === prefix) {
      return combinations[i].attributes
    }
  }

  return false
}

module.exports = combinationAttributes
