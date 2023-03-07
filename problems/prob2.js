/*
    Write a function findLeapYear() that will take the array [2023,2024,2025,2028,2030] as the input parameter and will check if each year is a leap year. If a year is a leap year insert that year in a new array, return the new array and print the result.
*/

function findLeapYear(yearsArray) {
    const leapYear = [];
    for (let i = 0; i < yearsArray.length; i++) {
        let year = yearsArray[i];
        if (year % 4 === 0) {
            // console.log(i, year);
            leapYear.push(year);
        }
    }
    return leapYear;
}

const yearsArray = [2023, 2024, 2025, 2028, 2030];

const findLeapYearArray = findLeapYear(yearsArray);
console.log(findLeapYearArray);