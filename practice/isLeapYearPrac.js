function isLeapYear(year) {
    if (year % 4 === 0 && year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}

const printLeapYear = isLeapYear(2000);
console.log(printLeapYear);