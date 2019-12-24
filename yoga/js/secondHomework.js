let age = document.getElementById('age');
let value = age.value;

function showUser(surname, name, value) {
    //console.log(value);
	alert("Пользователь " + surname + " " + name + ", его возраст " + value);
}



showUser('Тестов', 'Андрей', value);


// Второе вариант

// let age = document.getElementById('age');
 
// function showUser(surname, name) {
//          alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
// }
 
// showUser.apply(age, ["Горький","Максим"]);