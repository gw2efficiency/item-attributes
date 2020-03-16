/* eslint-env node, mocha */
import {expect} from 'chai'
import index from '../src/index.js'

describe('module', () => {
  it('exports functions', () => {
    expect(typeof index.parseItems).to.equal('function')
    expect(typeof index.parseCharacter).to.equal('function')
    expect(typeof index.combinationAttributes).to.equal('function')
  })
})
