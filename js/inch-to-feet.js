function inchToFeet(inches) {
    const myFeet = Math.floor(inches / 12) + ' Feet ' + inches % 12 + ' inches ';
    return myFeet;
}

const nanaInches = 70;
const nanaFeet = inchToFeet(nanaInches);
console.log(nanaFeet);