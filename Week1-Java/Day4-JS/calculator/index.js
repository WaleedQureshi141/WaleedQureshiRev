const form = document.querySelector("form");

// let currentMethod = "+";
const add = document.querySelector("#add");
const sub = document.querySelector("#sub");
const mult = document.querySelector("#mult");
const divide = document.querySelector("#divide");



let selectAction = null;

form.addEventListener("submit", calculate());
// form.addEventListener("submit", calculate(), true); this will enable capturing 

function calculate(event)
{
    const num1 = event.target.elements["num1"].value;
    const num2 = event.target.elements["num2"].value;

    console.log("form submitted");

    if (action == "+")
    {
        return num1 + num2;
    }
    if (action == "-")
    {
        return num1 - num2;
    }
    if (action == "*")
    {
        return num1 * num2;
    }
    if (action == "/")
    {
        return num1 / num2;
    }
}