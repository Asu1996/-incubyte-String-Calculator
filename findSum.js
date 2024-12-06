function sumOfNumbers(numbers) {
  if (numbers === '') return 0

  let delimiter = ','

  if (numbers.startsWith('//')) {
    const [delimiterPart, actualNumbers] = numbers.split('\n')
    delimiter = delimiterPart.slice(2)

    numbers = actualNumbers
  }

  const numbersArray = numbers.replace(/\n/g, delimiter).split(delimiter)

  return numbersArray.map(Number).reduce((acc, curr) => acc + curr, 0)
}

module.exports = sumOfNumbers
