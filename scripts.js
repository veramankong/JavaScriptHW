

for (let num = 0; num < 100; num++) {
    if (num % 3){
        console.log("Hee!");
    } else if (num % 5) {
        console.log("Haw!");
    } else if (num % 3 && num % 5) {
        console.log("Hee Haw!");
    } else {
        console.log(num);
    }
}