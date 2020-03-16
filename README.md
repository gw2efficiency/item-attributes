# item-attributes

[![Build Status](https://img.shields.io/travis/gw2efficiency/item-attributes.svg?style=flat-square)](https://travis-ci.org/gw2efficiency/item-attributes)
[![Coverage Status](https://img.shields.io/codecov/c/github/gw2efficiency/item-attributes/master.svg?style=flat-square)](https://codecov.io/github/gw2efficiency/item-attributes)

> Parse attributes of items and characters from the official gw2 api

*This is part of [gw2efficiency](https://gw2efficiency.com). Please report all issues in [the central repository](https://github.com/gw2efficiency/issues/issues).*

## Install

```
npm install gw2e-item-attributes
```

This module can be used for Node.js as well as browsers using [Browserify](https://github.com/substack/browserify-handbook#how-node_modules-works).

## Usage

### Parsing items

You can parse the attributes of a single item or an array of items using the `parseItems` method.
This method accepts weapons, armor, back items, trinkets and upgrades of any rarity. 

The following attributes **can** be included in the object:

- `Power`
- `Toughness`
- `Vitality`
- `Precision`
- `Ferocity`
- `Armor`
- `ConditionDamage`
- `ConditionDuration` (percentage)
- `HealingPower`
- `BoonDuration` (percentage)
- `AgonyResistance`
- `Concentration`
- `Expertise`

```js
import {parseItems} from 'gw2e-item-attributes'

let items = [
  {
    id: 38422,
    name: 'Giver\'s Pearl Quarterstaff',
    details: {
      defense: 0,
      infix_upgrade: {
        buff: {skill_id: 25542, description: '+20% Condition Duration'},
        attributes: [{attribute: 'Vitality', modifier: 171}, {attribute: 'Precision', modifier: 171}]
      }
    }
  }  
  // ...
]

let attributes = parseItems(items)
// -> {Vitality: 171, Precision: 171, ConditionDuration: 0.2}
```

### Parsing characters / secondary attributes

You can additionally parse characters and secondary attributes using the `parseCharacter` method.
This adds the base stats of a character at this level and additionally calculates:

- `Armor` including `Toughness`
- `CritChance` from `Precision` (percentage)
- `Health` from `Vitality`
- `CritDamage` from `Ferocity` (percentage)
- `ConditionDuration` including `Expertise` (percentage)
- `BoonDuration` including `Concentration` (percentage)

Make sure that you pass in **all** equipped items of the character, including infusions and upgrades.
For runes, pass in the rune as many times as it is equipped (e.g. 6 times for a full set)

```js
import {parseCharacter} from 'gw2e-item-attributes'

let level = 80
// The profession as given from the API, one of Elementalist, Guardian, 
// Thief, Engineer, Ranger, Mesmer, Revenant, Warrior or Necromancer
let profession = 'Elementalist'
let items = [/* ... */]

let attributes = parseCharacter(level, profession, items)
// {
//   Power: 123,
//   Toughness: 123,
//   Vitality: 123,
//   Precision: 123,
//   Ferocity: 123,
//   Armor: 123,
//   ConditionDamage: 123,
//   ConditionDuration: 0.5,
//   HealingPower: 123,
//   BoonDuration: 0.5,
//   AgonyResistance: 123,
//   Concentration: 123,
//   Expertise: 123,
//   CritChance: 0.5,
//   Health: 12345,
//   CritDamage: 1.5
// }
```

### Attribute combination names

This module includes a helper function `parseCombination` to easily distinct different
attribute combinations by name (e.g. "Berserker's"). If no name could be found it will return `false`.

```js
import {parseCombination} from 'gw2e-item-attributes'

let item = { /* item from the official API */ }

let attributes = attributeParsing.parseItems(items)
// -> {Power: 85, Precision: 126, Ferocity: 85}

let text = parseCombination(attributes)
// -> {prefix: "Assassin's", suffix: 'of the Assassin', trinket: 'Opal', ascended: ["Saphir's", "Soros's"]}
```

You can also find out the major and minor attributes if you know the combination prefix:

```js
import {combinationAttributes} from 'gw2e-item-attributes'

let attributes = combinationAttributes("Assassin's")
// -> [['Precision'], ['Power', 'Ferocity']]
```

## Tests

```
npm test
```

## Licence

MIT
