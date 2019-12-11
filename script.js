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
console.log(typeof(answer))
