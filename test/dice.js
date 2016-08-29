const { assert: { isFunction, strictEqual, oneOf } } = require('chai')

const { toDiceNotation, roll } = require('../lib/dice')

describe('dice', () => {
  describe('toDiceNotation', () => {
    it('should be a function', () => {
      isFunction(toDiceNotation)
    })
    it('should convert with a count and sides property to dice notation', () => {
      const die = { count: 2, sides: 24 }
      const expected = '2d24'
      strictEqual(toDiceNotation(die), expected)
    })
  })

  describe('roll', () => {
    it('should be a function', () => {
      isFunction(roll)
    })
    it('should handle multiple rolls', () => {
      const die = '2d20'
      const expected = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]
      for (let i=0; i<1000; i++) {
        oneOf(roll(die), expected)
      }
    })
  })
})
