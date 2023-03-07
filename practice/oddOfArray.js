function getOddNumbersOfAnArray(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (number % 2 !== 0) {
            //console.log(i, number);
            oddNumbers.push(number);
        }
    }
    return oddNumbers;
}

const numbers = [101, 202, 303, 404, 505, 606, 707, 808, 909];

const oddNumbersArray = getOddNumbersOfAnArray(numbers);
const sumOfOddNumbersArray = getOddNumbersOfAnArray(oddNumbersArray)
console.log(oddNumbersArray);
console.log(sumOfOddNumbersArray);