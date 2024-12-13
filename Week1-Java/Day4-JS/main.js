console.log("check it");

// js datatypes

var oldSchoolVar = 56; // old way to declare variable

// modern ways to declare variable

let myVar = "alice";    // global variable
const constVar = true;
let x; // undefined

let person = 
{
    name: "Waleed",
    age: 25,
    address: "something street"
};

// array can be dynamically changed
let fruits = ["fruits", "banana", "orange"];

// type coersion
let sum = "5" + 1; // "51"
let subtract = "5" - 1; // 4, string converted to number

// functions
function greet(name)
{
    console.log("hello " + name);
    console.log(`hello ${name}`); // string interpolation
}

// new syntax from es6
const modernGreet = (name) =>
{
    console.log(`hello ${name}`);
}

greet(person.name);