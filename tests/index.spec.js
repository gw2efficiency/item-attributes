/* eslint-env node, mocha */
import {expect} from 'chai'
import index from '../src/index.js'

describe('module', () => {
  it('exports functions', () => {
    expect(index.parseItems).to.be.a.function
    expect(index.parseCharacter).to.be.a.function
    expect(index.combinationAttributes).to.be.a.function
  })
})
