function isLeapYear(year) {
    const remainder = year % 4;

    if (remainder === 0) {
        return true;
    }
    return false;
}
const myLeapYear = isLeapYear(1920);
console.log(myLeapYear);