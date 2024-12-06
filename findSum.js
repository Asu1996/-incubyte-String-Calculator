function sumOfNumbers(numbers) {
  if (numbers === undefined || numbers === null) return null
  if (numbers === '') return 0

  let delimiter = ','
  let finalNumbers = numbers

  if (numbers.startsWith('//')) {
    const [delimiterPart, actualNumbers] = numbers.split('\n')
    delimiter = delimiterPart.slice(2)
    finalNumbers = actualNumbers
  }

  const numbersArray = finalNumbers.replace(/\n/g, delimiter).split(delimiter)

  const negativesInArray = numbersArray.filter((n) => n < 0)
  if (negativesInArray.length > 0) {
    throw new Error(
      `negative numbers not allowed: ${negativesInArray.join(',')}`
    )
  }

  return numbersArray.map(Number).reduce((acc, curr) => acc + curr, 0)
}

module.exports = sumOfNumbers
