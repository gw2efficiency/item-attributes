/* eslint-env node, mocha */
import {expect} from 'chai'
import resolve from '../src/combinationAttributes.js'

describe('resolving combination prefixes into attributes', () => {
  it('returns the major and minor attributes for a combination prefix', () => {
    expect(resolve('Assassin\'s')).to.deep.equal([['Precision'], ['Power', 'Ferocity']])
  })

  it('returns false for a unknown combination prefix', () => {
    expect(resolve('FooBar')).to.equal(false)
  })
})
