/* eslint-env node, mocha */
const expect = require('chai').expect
const parse = require('../src/parseCombination.js')
const combinations = require('../src/staticCombinations.js')

describe('parsing attribute combination name', () => {
  it('parses the name based on the main attribute', () => {
    expect(parse({Power: 126, Precision: 85, Ferocity: 85}).prefix).to.equal("Berserker's")
  })

  it('parses the name even if the stats are flipped', () => {
    expect(parse({Precision: 85, Power: 126, Ferocity: 85}).prefix).to.equal("Berserker's")
  })

  it('parses the correct name for items with other main stats', () => {
    expect(parse({Precision: 126, Power: 85, Ferocity: 85}).prefix).to.equal("Assassin's")
    expect(parse({Power: 85, Precision: 126, Ferocity: 85}).prefix).to.equal("Assassin's")
    expect(parse({Power: 85, Ferocity: 85, Precision: 126}).prefix).to.equal("Assassin's")
    expect(parse({Ferocity: 85, Power: 85, Precision: 126}).prefix).to.equal("Assassin's")
  })

  it('parses a invalid combination', () => {
    let attributes = {NonExisting: 1}
    expect(parse(attributes)).to.equal(false)
  })

  it('parses the correct name for items with multiple main stats', () => {
    expect(parse({Precision: 126, Power: 126}).prefix).to.equal('Celestial')
    expect(parse({Power: 126, Precision: 126}).prefix).to.equal('Celestial')
  })

  it('includes all keys for all combinations', () => {
    for (let i = 0; i !== combinations.length; i++) {
      expect(Object.keys(combinations[i].text)).to.deep.equal(['prefix', 'suffix', 'trinket', 'ascended'])
    }
  })
})
