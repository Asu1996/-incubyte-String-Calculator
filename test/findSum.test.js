import { expect } from 'chai'
import sumOfNumbers from '../findSum.js'

describe('Basic tests', () => {

  it('returns 0 for an empty string', () => {
    const result = sumOfNumbers('')
    expect(result).to.equal(0)
  })

  it('returns itself for an single number', () => {
    const result = sumOfNumbers('2')
    expect(result).to.equal(2)
  })

  it('dev test 1', () => {
    const result = sumOfNumbers('1,5')
    expect(result).to.equal(6)
  })

  it('dev test 1', () => {
    const result = sumOfNumbers('1,5\n2')
    expect(result).to.equal(8)
  })
})
