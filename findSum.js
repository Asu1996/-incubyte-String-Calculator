function sumOfNumbers(numbers) {
  if (numbers === '') return 0
  return numbers
    .replace(/\n/g, ',')
    .split(',')
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0)
}

module.exports = sumOfNumbers
