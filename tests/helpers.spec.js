/* eslint-env node, mocha */
import {expect} from 'chai'
import * as helpers from '../src/helpers.js'

describe('helpers', () => {
  it('can merge attributes', () => {
    let result = helpers.mergeAttributes({Foo: 1, Bar: 2}, {Foo: 8, FooBar: 3})
    expect(result).to.deep.equal({Foo: 9, Bar: 2, FooBar: 3})
  })

  it('can normalize attributes', () => {
    let result = helpers.normalizeAttributes({Foo: 1, Bar: 2, BoonDuration: 50, ConditionDuration: 40, CritChance: 20})
    expect(result).to.deep.equal({Foo: 1, Bar: 2, BoonDuration: 0.5, ConditionDuration: 0.4, CritChance: 0.2})
  })
})
