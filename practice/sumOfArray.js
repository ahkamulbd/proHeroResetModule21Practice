function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        sum = sum + number;
        console.log(number, sum)
    }
    return sum
}

//const numbers = [12, 65, 45, 78, 32, 45, 91];
const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const sumOfArrayElements = getSumOfAnArray(numbers);
console.log(sumOfArrayElements);