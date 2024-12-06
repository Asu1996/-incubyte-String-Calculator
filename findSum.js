function sumOfNumbers(numbers) {
  if (numbers === '') return 0

  if (numbers.startsWith('//')) {
    const [delimiter, actualNumbers] = numbers.split('\n')
    const actualDelimiter = delimiter.slice(2)

    return actualNumbers
    .replace(/\n/g, actualDelimiter)
    .split(actualDelimiter)
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0)
  } 

  return numbers
    .replace(/\n/g, ',')
    .split(',')
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0)
}

module.exports = sumOfNumbers
