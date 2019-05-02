/*
Vera Mankongvanichkul
JS Exercise Ch. 5
http://vmankongvanichkul.greenriverdev.com/it328/jsexercises/chapter5/json-search.js
Contains JSON objects and function to search through them
*/

//ppl data
let ppl = [
    {
        "name": "John Doe",
        "sex": "m",
        "born": 1884,
        "died": 1915,
        "father": "Jack Doe",
        "mother": "Mary Joe"
    },
    {
        "name": "Bart Simpson",
        "sex": "m",
        "born": 1990,
        "died": 2030,
        "father": "Homer Simpson",
        "mother": "Marge Simpson"
    },
    {
        "name": "Stewie Griffin",
        "sex": "m",
        "born": 2000,
        "died": 2045,
        "father": "Peter Griffin",
        "mother": "Lois Griffin"
    },
    {
        "name": "Bruce Wayne",
        "sex": "m",
        "born": 1990,
        "died": 2049,
        "father": "Thomas Wayne",
        "mother": "Martha Wayne"
    },
    {
        "name": "Angelica Pickles",
        "sex": "f",
        "born": 1990,
        "died": 2025,
        "father": "Didi Pickles",
        "mother": "Stu Pickles"
    }
];

//get name entered in text box
let input = document.getElementById("name");
console.log(input);

//get button
let button = document.getElementById("search");

//print to html page
let output = document.getElementById("display");

//array for matching name
let matched = [];

//search for name and add to array
button.onclick = function() {
    //check for name
    searchName();
    if (matched.length > 0)
    {
        for (let person of matched)
        {
            output.innerHTML +=
                "<p>Name: " + person.name +
                "<br>Sex: " + person.sex +
                "<br>Born: "+ person.born +
                "<br>Died: "+ person.died +
                "<br>Father: "+ person.father +
                "<br>Mother: "+ person.mother +
                "</p>";
        }
    }
    else //if name isn't found
    {
        output.innerHTML += "<p>No person found.</p>";
    }
};

function searchName() {

    for (let person of ppl)
    {
        if (person.name.toLowerCase().includes(input.value.toLowerCase()))
        {
            matched.push(person);
        }
    }
}
