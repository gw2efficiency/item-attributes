/* eslint-env node, mocha */
const expect = require('chai').expect
const scaling = require('../src/scaling.js')

describe('character attribute scaling', () => {
  it('can calculate scaled base attributes', () => {
    expect(scaling.scaledBaseAttributes(1)).to.equal(37)
    expect(scaling.scaledBaseAttributes(68)).to.equal(739)
    expect(scaling.scaledBaseAttributes(80)).to.equal(1000)
  })

  it('can calculate scaled base health', () => {
    expect(scaling.scaledBaseHealth(1, 'Warrior')).to.equal(28)
    expect(scaling.scaledBaseHealth(80, 'Necromancer')).to.equal(9212)

    expect(scaling.scaledBaseHealth(1, 'Revenant')).to.equal(18)
    expect(scaling.scaledBaseHealth(80, 'Mesmer')).to.equal(5922)

    expect(scaling.scaledBaseHealth(1, 'Thief')).to.equal(5)
    expect(scaling.scaledBaseHealth(80, 'Elementalist')).to.equal(1645)

    expect(scaling.scaledBaseHealth(68, 'Guardian')).to.equal(1182.5)
  })

  it('can calculate the scaled attribute bonus', () => {
    expect(scaling.scaledAttributeBonus(1, 15)).to.equal(0.79)
    expect(scaling.scaledAttributeBonus(68, 15)).to.equal(11.57)
    expect(scaling.scaledAttributeBonus(80, 15)).to.equal(15)

    expect(scaling.scaledAttributeBonus(1, 21)).to.equal(1.1)
    expect(scaling.scaledAttributeBonus(68, 21)).to.equal(16.2)
    expect(scaling.scaledAttributeBonus(80, 21)).to.equal(21)
  })
})
