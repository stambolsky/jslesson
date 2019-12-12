'use strict'

var leftBorderWidtg = 1;
let second = 2;
const pi = 3.14;

console.log(leftBorderWidtg)
console.log(second)
console.log(pi)

let person = {
    name: "Sergey",
    age: 35,
    isMarried: true
};

console.log(person.name)
console.log(person["age"]);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp']
console.log(arr[2])

//alert("ALERT")
//confirm("Hello")
let answer = prompt("Сколько тебе лет?", "Да")
console.log(typeof(answer));




function calc(a,b) {
    return (a + b);
}

let calc2 = function (a,b) {
    return (a + b);
}
console.log(calc(3,4));

console.log(calc(32,43));

function retVar() {
    let num = 50;
    return num;
}

let calc3 = (a,b) => a+b;
console.log(calc3(332,433));


let anotherNum = retVar();
console.log(anotherNum);



let str = "test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twerlve = "12.2px";

//console.log(Math.round(twerlve));
console.log(parseInt(twerlve));
console.log(parseFloat(twerlve));


//Callback function

function first() {
    //Что-то делаем
    setTimeout( function(){
        console.log(1);
    }, 500 );
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log("Я учу " + lang);
    callback();
}

function done() {
    console.log("Я прошел 3 урок!")
}

learnJS("JS", function() {
    console.log("Я прошел 3 урок")
})