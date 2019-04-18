/*
Write a function heeHaw() that takes any number as an input and prints the numbers from 1 to that number to the
console, using the same rules as the Chapter 2 exercise. If the user passes in an invalid parameter, print an error
message. Write multiple statements to test your function. Make sure that your test output is clear.

Challenge:  Write a recursive version of your function.
 */

window.onload = function() {
    //get input from field
    let button = document.getElementById('heeHaw');
    button.onclick = function() {
        //pass input to function
        let input = document.getElementById('num').value;
        heeHaw(input);
    }
};

function heeHaw(input) {
    //check for valid number
    if (input <= 0) {
        console.log("Input is invalid.")
    }
    //loop to input number and print appropriate output
    for (let i = 1; i <= input; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log("Hee Haw!");
        } else if (i % 3 === 0){
            console.log("Hee!");
        } else if (i % 5 === 0) {
            console.log("Haw!");
        } else {
            console.log(i);
        }
    }
}


