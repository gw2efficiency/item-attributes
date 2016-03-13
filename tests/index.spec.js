/* eslint-env node, mocha */
const expect = require('chai').expect
const index = require('../src/index.js')

describe('module', () => {
  it('exports functions', () => {
    expect(index.parseItems).to.be.a.function
    expect(index.parseCharacter).to.be.a.function
    expect(index.combinationAttributes).to.be.a.function
  })
})
