// Exercise 1: 
function minMaxAverage(numbersArray) {
    const total = numbersArray.length;
    const minValue = Math.min(...numbersArray);
    const maxValue = Math.max(...numbersArray);
    const avg = numbersArray.reduce((sum, val) => sum + val, 0) / total;

    console.log(
        `Total Numbers: ${total}, Min Value: ${minValue}, ` +
        `Max Value: ${maxValue}, Average: ${avg}`
    );
}

console.log("Exercise 1 Tests:");
minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);
minMaxAverage([1, 5, 3, 5, 10, 12, 8, 6]);
minMaxAverage([10, 10, 10, 10]);


// Exercise 2: 
function countVowels(inputString) {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let char of inputString.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log("Exercise 2 Tests:");
console.log(`Winter: ${countVowels("Winter")} vowels`);
console.log(`Hello: ${countVowels("Hello")} vowels`);
console.log(`Rhythm: ${countVowels("Rhythm")} vowels`);

// Exercise 3:
function sortNumbers(numbersArray) {
    return numbersArray.slice().sort((a, b) => a - b);
}

console.log("Exercise 3 Tests:");
console.log(`Original Array: [9,4,6,2] -> Sorted Array: [${sortNumbers([9, 4, 6, 2])}]`);
console.log(`Original Array: [10,5,0,3,100,45] -> Sorted Array: [${sortNumbers([10, 5, 0, 3, 100, 45])}]`);
console.log(`Original Array: [1,2,3] -> Sorted Array: [${sortNumbers([1, 2, 3])}]`);

// Exercise 4: 
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

console.log("Exercise 4 Tests:");
function testCelsiusToFahrenheit(value) {
    const f = celsiusToFahrenheit(value).toFixed(1);
    console.log(`${value.toFixed(1)} Celsius = ${f} Fahrenheit`);
}

testCelsiusToFahrenheit(30);
testCelsiusToFahrenheit(0);
testCelsiusToFahrenheit(-10);
