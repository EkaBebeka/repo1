

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    // код для задачи №1 писать здесь
    //return x;

"use strict"
let x = [];
let d;

d = Math.pow(b, 2) - (4 * a * c);
if (d>0){
x1 = (-b + Math.sqrt(d)) / 2 * a;
x2 = (-b - Math.sqrt(d)) / 2 * a;
console.log("x1 = " + x1 + " x2 = " + x2);
}
else if (d == 0){
x1 = (-b) / 2 * a;;
console.log("x1, x2 = " + x1);
}
else
console.log("Ошибка. D меньше нуля");
}
return x;   
}


function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №2 писать здесь
    //console.log(result)
    //return result;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // код для задачи №3 писать здесь
    //return averageMark;
}
