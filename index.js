// 1.Write a Javascript program that removes the duplicate elements from an array.

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

let arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
let arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);

console.log(arrayWithoutDuplicates);


// 2.Write a JavaScript program to create a new string without the first and last characters of a given string. 

function removeFirstAndLastChar(str) {
    if (str.length <= 2) {
        return '';
    }

    return str.slice(1, -1);
}

let originalString = "Javascript, Assignment";
let newString = removeFirstAndLastChar(originalString);

console.log(newString);


// 3.Write a function that takes an array of strings as input and prints each element to the console using the forEach method.

function printArrayElements(arr) {
    arr.forEach(element => {
        console.log(element);
    });
}

let stringArray = ["This", "is", "JavaScript", "Assignment"];
printArrayElements(stringArray);


// 4.Write a function that takes an array of numbers as input and returns true if any of the numbers are negative, otherwise false, using the some method.

function hasNegativeNumber(arr) {
    return arr.some(number => number < 0);
}

let numbers1 = [1, 2, 3, 4, 5];
let numbers2 = [1, -2, 3, 4, 5];

console.log(hasNegativeNumber(numbers1));
console.log(hasNegativeNumber(numbers2));


// 5.Write a function that takes an array of numbers as input, filters out the even numbers, and then returns the sum of the remaining numbers using a combination of filter and reduce methods.

function sumOfOddNumbers(arr) {
    const oddNumbers = arr.filter(number => number % 2 !== 0);
    const sum = oddNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return sum;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = sumOfOddNumbers(numbers);

console.log(result);