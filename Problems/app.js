// ==============================
// Problem #1
// ==============================

let firstName = "Abdul Rafay";
let lastName = "Imran";
let address = "Main Street";

address = "Gulshan-e-Iqbal";

console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Address:", address);


// ==============================
// Problem #2
// ==============================


let street = "2nd Street Gulshan";
let country = "Pakistan";

let fullMailingAdd = street + " " + country;

console.log("Full Mailing Address:", fullMailingAdd);



// ==============================
// Problem #3
// ==============================


let score1 = 33;
let score2 = 33;
let score3 = 33;

let totalScore = score1 + score2 + score3;
console.log("Total Score:", totalScore);

let plates = 20;
let people = 7;

let remainingPlates = plates - people;

let message = `There are ${remainingPlates} plates available`;
console.log(message);



// ==============================
// Problem #4
// ==============================

let fruits = ["apple", "banana", "mango", "orange", Math.random()*100];
let firstFruit = fruits[0];

fruits[fruits.length - 1] = "grapes";

console.log("Actual Fruits Array:", fruits);
console.log("First Fruit Variable:", firstFruit);



// ==============================
// Extra Task
// ==============================

function doNumLe(num1, num2) {
    // console.log(num1, num2);

    if (num1 == num2) {
        console.log("Both values are equal");
    } else if (num1 < num2) {
        console.log(num1, "is less than", num2);
    } else {
        console.log(num1, "is greater than", num2);
    }
}

doNumLe(12, 12);