const { assert: { isFunction, oneOf } } = require('chai')

const { randomInt } = require('../lib/math')

describe('math', () => {
  describe('randomInt', () => {
    it('should be a function', () => {
      isFunction(randomInt)
    })
    it('should return a number', () => {
      for (let i = 0; i < 1000; i++) {
        oneOf(randomInt(2,6), [2,3,4,5,6])
      }
    })
  })
})
