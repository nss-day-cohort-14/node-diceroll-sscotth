'use strict'

const { exec } = require('child_process')

const { assert: { oneOf, strictEqual } } = require('chai')
describe('cli', () => {
  it('should handle no args', (cb) => {
    exec('bin/diceroll', (err, stdout) => {
      if (err) cb(err)
      oneOf(stdout.toString(), ['1\n','2\n','3\n','4\n','5\n','6\n'])
      cb()
    })
  })

  it('should handle one arg', (cb) => {
    exec('bin/diceroll 1', (err, stdout) => {
      if (err) cb(err)
      strictEqual(stdout.toString(), '1\n')
      cb()
    })
  })

  it('should handle two args', (cb) => {
    exec('bin/diceroll 20 1', (err, stdout) => {
      if (err) cb(err)
      strictEqual(stdout.toString(), '20\n')
      cb()
    })
  })
})
