function factorialMultiplication(number) {
    let multiple = 1;

    for (let i = 1; i <= number; i++) {
        multiple = multiple * i;
        console.log(i, multiple);
    }
    return multiple;
}

const findFactorial = factorialMultiplication(5);
console.log(findFactorial);