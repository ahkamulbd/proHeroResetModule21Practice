function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        sum = sum + number;
        console.log(number, sum)
    }
    return sum
}

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
const sumOfOddNumbersArray = getSumOfAnArray(oddNumbersArray)
console.log(oddNumbersArray);
console.log(sumOfOddNumbersArray);