let options = {
    wight: 1024,
    hight: 1024,
    name: "test"
};



console.log(options.name);
options.bool = false;
options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool;
console.log(options);

for (let key in options) {
    console.log('Свойство '+ key + ' имеет значение ' + options[key]);
}
console.log(Object.keys(options).length);


//МАССИВЫ
let arr = [1, 2, 3, 4, 5];

arr.pop(); //удалить последний элемент из массива
arr.push("5"); //добавить последний элемент в массив 
arr.shift(); //удалить первый  элементиз массива
arr.unshift("1"); // добавить первый элемент в массив

console.log(arr);

///////////////////
//Перебор массива//
//////////////////
//1
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//2
let arr2 = ["first", 2, 3, "four", 5];
arr2.forEach(function(item, i, mass) {
    console.log(i + ': ' + item + " (массив: " + mass + ')');
});
console.log(arr2);

//3
let mass = [1, 3, 4, 6, 7];

for (let key of mass) {
    console.log(key);
}



let ans = prompt("", ""),
arr3 = [];

arr3 = ans.split(',');
console.log(arr3);



let arr4 = ["aawe", "zzz", "pp", "rwe"],
i = arr4.join(", ");

console.log(i);



let arr5 = ["aawe", "zzz", "app", "rwe"],
    i2 = arr5.sort();

console.log(arr5);



let arr6 = [1, 15, 3, 2],
    i3 = arr6.sort(compareNum);

function compareNum(a, b) {
    return a-b;
}

console.log(arr6);

///////////
//ОБЪЕКТЫ//
///////////

let soldier = {
    health: 400,
    armor: 100
};

let john = {
    health: 100
};

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);


let cat = {
    name: "Том",
    action: "Прыгать",
    speak: "Мяу",
    like: "Мясо"
};

for (let key in cat) {
    console.log(key + ": " + cat[key]);
}

