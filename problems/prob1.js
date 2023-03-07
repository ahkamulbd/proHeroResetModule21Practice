/*
    Write a function that will take hour as the input parameter and will
    convert it into minutes and will return the result in minutes.
*/

function hourToMinutes(hour) {
    const convertedMinutes = hour * 60;

    return convertedMinutes;
}

const myMinutes = hourToMinutes(7);
console.log(myMinutes);