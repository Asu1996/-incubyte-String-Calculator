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
})
