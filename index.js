console.log('Welcome to the array & DOM challenges');

// -----------CHALLENGE 1----------
// INSTRUCTIONS: use Array.forEach() to console.log() each element

// DO NOT TOUCH BELOW
var arr = ['Hello', 'my', 'name', 'is', 'John'];
// DO NOT TOUCH ABOVE

function logArrayElements(input) {
    input.forEach(function(elem) {
        console.log(elem);
    });
}

// UNCOMMENT BELOW
logArrayElements(arr);

// -----------CHALLENGE 2----------
// INSTRUCTIONS: use Array.map() to return a new array with the uppercase elements
// expected result:
// [
//     'HELLO',
//     'MY',
//     'NAME',
//     'IS',
//     'JOHN',
// ]

function transformUppercase(input) {
    var result = input.map(function(elem) {
        return elem.toUpperCase();
    });
    return result;
}

// UNCOMMENT BELOW
console.log(transformUppercase(arr));

// -----------CHALLENGE 3----------
// INSTRUCTIONS: use Array.reduce() to concatenate all the strings in the array
// expected result: 'Hello my name is John'
function reduceStrings(input) {
    var str = input.reduce(function(acc, curr) {
        return acc + ' ' + curr;
    }, '');
    return str;
}

console.log(reduceStrings(arr));

// -----------CHALLENGE 4----------
// INSTRUCTIONS: use Array.map() to return an array containing the city of each element
// expected result:
// [
//     'Berlin',
//     'New York',
//     'Sydney',
//     'Tokyo',
// ];

// DO NOT TOUCH BELOW
arr = [
    {
        name: 'John',
        address: { city: 'Berlin' }
    },
    {
        name: 'Albert',
        address: { city: 'New York' }
    },
    {
        name: 'Hannah',
        address: { city: 'Sydney' }
    },
    {
        name: 'Paul',
        address: { city: 'Tokyo' }
    }
];
// DO NOT TOUCH ABOVE

function getCitiesArray(input) {
    var city = input.map(function(el) {
        return el.address.city;
    });
    return city;
}

// UNCOMMENT BELOW
console.log(getCitiesArray(arr));

// -----------CHALLENGE 5----------
// INSTRUCTIONS: use Array.find() to return the person living in Sydney
// expected result:
// {
//     name: 'Hannah',
//     address: { city: 'Sydney' },
// },

function getSydneyCitizen(input) {
    var found = input.find(function(el) {
        if (el.address.city === 'Sydney') return el;
    });
    return found;
}

// UNCOMMENT BELOW
console.log(getSydneyCitizen(arr));

// -----------CHALLENGE 6----------
// INSTRUCTIONS: use Array.filter() to return a new Array with persons older than 24 years
// expected result:
// [
//     {
//         name: 'Hannah',
//         age: 36
//         address: { city: 'Sydney' },
//     },
//     {
//         name: 'Paul',
//         age: 48,
//         address: { city: 'Tokyo' },
//     },
// ];

// DO NOT TOUCH BELOW
arr.forEach(function(el, index) {
    el.age = (index + 1) * 12;
});
// DO NOT TOUCH ABOVE
function getWisePeople(input) {
    var result = input.filter(function(el) {
        return el.age > 24;
    });
    return result;
}

// UNCOMMENT BELOW
console.log(getWisePeople(arr));

// -----------CHALLENGE 7----------
// INSTRUCTIONS: use Array.slice() to return a new array with the two people in the middle
// expected result:
// [
//     {
//         name: 'Albert',
//         age: 24,
//         address: { city: 'New York' },
//     },
//     {
//         name: 'Hannah',
//         age: 36,
//         address: { city: 'Sydney' },
//     },
// ]

function getMiddlePeople(input) {
    var result = input.slice(1, 3);
    return result;
}

// UNCOMMENT BELOW
console.log(getMiddlePeople(arr));

// -----------CHALLENGE 8----------
// INSTRUCTIONS:
// 1. Use document.querySelector to select all paragraphs.
// 2. Use Array.map() to return a new array with all of the heights (element.clientHeight) of the selected paragraphs.
// HINT: don't forget to wrap document.querySelector in Array.from()

function getParagraphHeights() {
    var paragraphs = Array.from(document.querySelectorAll('p'));
    console.log(paragraphs);
    var result = paragraphs.map(function(el) {
        return el.clientHeight;
    });
    return result;
}

// UNCOMMENT BELOW
console.log(getParagraphHeights());

// -----------CHALLENGE 9----------
// INSTRUCTIONS:
// 1. Use document.querySelector to select one paragraph
// 2. Use Object.keys() to get an array of all keys of the element.style property
// 3. Finally, use Array.filter() to return a new array with keys that start with the letter 'm'

function getFilteredStyleKeys() {
    var paragraph = document.querySelector('p');
    var keys = Object.keys(paragraph.style);
    var startingWithM = keys.filter(function(el) {
        return el.charAt(0) === 'm';
    });
    return startingWithM;
}

// UNCOMMENT BELOW
console.log(getFilteredStyleKeys());

// -----------CHALLENGE 10----------
// INSTRUCTIONS:
// 1. Use document.querySelectorAll to select all paragraphs.
// 2. Use Array.forEach() to modify the 'innerHTML' of each element. You can set just any text inside.

function changeHtml() {
    var paragraphs = Array.from(document.querySelectorAll('p'));
    paragraphs.forEach(function(el) {
        el.innerHTML = 'Bum';
    });
    return paragraphs;
}

// UNCOMMENT BELOW
changeHtml();
