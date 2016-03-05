function mergeAttributes (attributes, additionalAttributes) {
  for (let key in additionalAttributes) {
    attributes[key] = (attributes[key] || 0) + additionalAttributes[key]
  }
  return attributes
}

const percentageAttributes = ['ConditionDuration', 'BoonDuration']
function normalizeAttributes (attributes) {
  for (let key in attributes) {
    attributes[key] = percentageAttributes.indexOf(key) !== -1 ? attributes[key] / 100 : attributes[key]
  }
  return attributes
}

module.exports = {mergeAttributes, normalizeAttributes}
