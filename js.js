if (2*4 == 8) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

let num = 50;

if (num < 49) {
    console.log("Неверно");
} else if (num > 100) {
    console.log("Много");
} else {
    console.log("Верно");
}

//тернарный оператор
(num == 50) ? console.log("Верно") : console.log("Неверно");

switch (num) {
    case num < 49:
        console.log("Неверно");
        break;
    case num > 100:
        console.log("Много");
        break;
    case num > 80:
        console.log("Все еще много");
        break;
    case 50:
        console.log("Верно");
        break;
    default:
        console.log("Что-то не так!!!");
        break;
}

num = 49;

while (num < 55) {
    console.log(num);
    num++;
}

num = 45;
do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue;
    }
    console.log(i);
}