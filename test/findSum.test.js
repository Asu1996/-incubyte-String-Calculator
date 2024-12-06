import { expect } from 'chai'
import sumOfNumbers from '../findSum.js'

describe('Basic tests', () => {
  it('empty string', () => {
    const result = sumOfNumbers('')
    expect(result).to.equal(0)
  })

  it('single number', () => {
    const result = sumOfNumbers('2')
    expect(result).to.equal(2)
  })

  it('dev test 1', () => {
    const result = sumOfNumbers('1,5')
    expect(result).to.equal(6)
  })

  it('new line delimiter', () => {
    const result = sumOfNumbers('1,5\n2')
    expect(result).to.equal(8)
  })

  it('handles custom delimiters', () => {
    const result = sumOfNumbers('//;\n1;2')
    expect(result).to.equal(3)
  })

  it('throws an error for negative numbers', () => {
    // const result = sumOfNumbers('1,-2,3,-4')
    expect(() => sumOfNumbers('1,-2,3,-4')).to.throw(
      'negative numbers not allowed: -2,-4'
    )
  })
})

describe('Extra tests', () => {
  it('null entry', () => {
    const result = sumOfNumbers(null)
    expect(result).to.equal(null)
  })
})