/*
    Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
    as the input parameter and will return the sum of the odd numbers.
*/

const array = [5, 7, 8, 10, 45, 30];

function findSumOfArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        sum = sum + element;
        //console.log(i, element, sum);
    }
    return sum;
}
//console.log(findSumOfArray(array));

function findOddElementsSumOfArray(array) {
    let oddElements = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element % 2 !== 0) {
            oddElements.push(element);
        }
    }
    return oddElements;
}

const oddElementsArray = findOddElementsSumOfArray(array)

console.log(oddElementsArray);

const oddElementsSum = findSumOfArray(oddElementsArray);
console.log(oddElementsSum);