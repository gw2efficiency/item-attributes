# item-attribute-parsing

[![Build Status](https://img.shields.io/travis/gw2efficiency/item-attribute-parsing.svg?style=flat-square)](https://travis-ci.org/gw2efficiency/item-attribute-parsing)
[![Coverage Status](https://img.shields.io/codecov/c/github/gw2efficiency/item-attribute-parsing/master.svg?style=flat-square)](https://codecov.io/github/gw2efficiency/item-attribute-parsing)

> Parse attributes of items from the official gw2 api

**:bomb: NOTE: This module is still heavily in development and the API might change completely. Please don't use it yet.**

## Install

```
npm install https://github.com/gw2efficiency/item-attribute-parsing
```

This module can be used for Node.js as well as browsers using [Browserify](https://github.com/substack/browserify-handbook#how-node_modules-works).

(Note: Babel gets pulled in as a dependency, because the module is written in ES7 and 
gets compiled into ES5 during the installation. The Babel code is **not** included in the module, 
don't be shocked at the dependency tree. :wink:)

## Usage

```js
// TODO

// Result: A (somewhat) sane object of attributes
let attributes = {
  Power: 865,
  Toughness: 357,
  Vitality: 569,
  Precision: 123,
  Ferocity: 485,
  Armor: 70,
  ConditionDamage: 200,
  ConditionDuration: 0.5, // percentage
  HealingPower: 100,
  BoonDuration: 0.7, // percentage
  AgonyResistance: 150,
  Concentration: 120
  Expertise: 140
}

// You can use this result to calculate the total values of a character
// using the TODO method. This calculates:
// - Toughness => Armor
// - Precision => CritChance (percentage)
// - Vitality => Health
// - Ferocity => CritDamage (percentage)
// - Expertise => ConditionDuration (percentage)
// - Concentration => BoonDuration (percentage)
```

## Tests

```
npm test
```

## Licence

MIT
