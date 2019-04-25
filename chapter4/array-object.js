/*
Vera Mankongvanichkul
4/24/2019
http://vmankongvanichkul.greenriverdev.com/it328/jsexercises/chapter4/array-object.html
Converts an array to an object

Define a function that accepts an array as a parameter, and returns an object.
The function should convert the array into an object with properties
containing the array values, grouped by type.
*/

//tests
let array = [ -1, 5, "cat", false, 10.2, true, "dog" ];
let display = arrayObject(array);


//create displays
let displayStrings = "<p>Strings: " + display.strings.toString() + "</p>";
let displayNumbers = "<p>Numbers: " + display.numbers.toString() + "</p>";
let displayBooleans = "<p>Booleans: " + display.booleans.toString() + "</p>";


//add displays to result div
let displayResults = [displayStrings, displayNumbers, displayBooleans];
for(let display of displayResults) {
    document.getElementById("display").innerHTML += display;
}


//turn array into object
function arrayObject(array) {
    //create different type arrays
    let strings = [], numbers = [], booleans = [];

    //push values to correct type array
    for(let value of array) {
        if(typeof value == "string") {
            strings.push(value);
        } else if(typeof value == "number") {
            numbers.push(value);
        } else if(typeof value == "boolean") {
            booleans.push(value);
        }
    }

    //return object with different type arrays
    return {
        strings: strings,
        numbers: numbers,
        booleans: booleans,
    };
}
