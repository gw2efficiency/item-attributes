// Calculate the base attributes based on the scaling table
// See: https://wiki.guildwars2.com/wiki/Attribute
const attributeGrowth = [
  0, 7, 7, 7, 7, 7, 7, 7, 7, 7,
  0, 10, 0, 10, 0, 10, 0, 10, 0, 10,
  0, 14, 0, 14, 0, 15, 0, 16, 0, 16,
  0, 20, 0, 20, 0, 20, 0, 20, 0, 20,
  0, 24, 0, 24, 0, 25, 0, 26, 0, 26,
  0, 30, 0, 30, 0, 30, 0, 30, 0, 30,
  0, 34, 0, 34, 0, 35, 0, 36, 0, 36,
  0, 44, 0, 44, 0, 45, 0, 46, 0, 46
]

export function scaledBaseAttributes (level) {
  let attributes = 37

  for (let i = 0; i !== level; i++) {
    attributes += attributeGrowth[i]
  }

  return attributes
}

// Calculate the base health based on the scaling table
// See: https://wiki.guildwars2.com/wiki/Health
const baseHealthGrowth = {
  Elementalist: [5, 12.5, 25, 37.5, 50],
  Guardian: [5, 12.5, 25, 37.5, 50],
  Thief: [5, 12.5, 25, 37.5, 50],
  Engineer: [18, 45, 90, 135, 180],
  Ranger: [18, 45, 90, 135, 180],
  Mesmer: [18, 45, 90, 135, 180],
  Revenant: [18, 45, 90, 135, 180],
  Warrior: [28, 70, 140, 210, 280],
  Necromancer: [28, 70, 140, 210, 280]
}

export function scaledBaseHealth (level, profession) {
  let health = 0

  for (let i = 0; i !== level; i++) {
    let column = Math.floor((i + 1) / 20)
    health += baseHealthGrowth[profession][column]
  }

  return health
}

// Calculate the attribute bonus based on the scaling tables
// See: https://wiki.guildwars2.com/wiki/Precision
// See: https://wiki.guildwars2.com/wiki/Ferocity
const scaledAttributeBonuses = {
  15: [
    0.79, 0.86, 0.93, 1.00, 1.07, 1.14, 1.21, 1.29, 1.36, 1.43,
    1.50, 1.57, 1.64, 1.71, 1.79, 1.85, 1.93, 2.00, 2.07, 2.14,
    2.29, 2.43, 2.57, 2.71, 2.86, 3.00, 3.14, 3.28, 3.42, 3.57,
    3.71, 3.86, 4.00, 4.14, 4.29, 4.43, 4.57, 4.71, 4.86, 5.00,
    5.21, 5.43, 5.64, 5.86, 6.07, 6.28, 6.50, 6.71, 6.93, 7.14,
    7.36, 7.57, 7.79, 8.00, 8.21, 8.42, 8.64, 8.85, 9.07, 9.29,
    9.57, 9.85, 10.14, 10.43, 10.71, 11.00, 11.29, 11.57, 11.86, 12.14,
    12.43, 12.71, 13.00, 13.29, 13.57, 13.86, 14.14, 14.43, 14.71, 15.00
  ],
  21: [
    1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0,
    2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 3.0,
    3.2, 3.4, 3.6, 3.8, 4.0, 4.2, 4.4, 4.6, 4.8, 5.0,
    5.2, 5.4, 5.6, 5.8, 6.0, 6.2, 6.4, 6.6, 6.8, 7.0,
    7.3, 7.6, 7.9, 8.2, 8.5, 8.8, 9.1, 9.5, 9.7, 10.0,
    10.3, 10.6, 10.9, 11.2, 11.5, 11.8, 12.1, 12.4, 12.7, 13.0,
    13.4, 13.8, 14.2, 14.6, 15.0, 15.4, 15.8, 16.2, 16.6, 17.0,
    17.4, 17.8, 18.2, 18.6, 19.0, 19.4, 19.8, 20.2, 20.6, 21.0
  ]
}

export function scaledAttributeBonus (level, maxLevelValue) {
  return scaledAttributeBonuses[maxLevelValue][level - 1]
}
