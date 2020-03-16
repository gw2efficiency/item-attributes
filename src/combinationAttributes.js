import combinations from './static/combinations.js'

export default function combinationAttributes (prefix) {
  for (let i = 0; i !== combinations.length; i++) {
    if (combinations[i].text.prefix === prefix) {
      return combinations[i].attributes
    }
  }

  return false
}
