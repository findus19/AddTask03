'use strict';

/* первое задание */
let lang = prompt("Введите ru или en");
let arrru = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
arreng = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];

if (lang == 'ru') {
    alert(arrru);
} else if (lang == 'en') {
    alert(arreng);
}

switch (lang) {
	case 'ru':
		console.log(arrru);
	break;
	case 'en':
		console.log(arreng);
	break;
}

let array = {
	'ru':['пн', 'вт', 'ср','чт', 'пт', 'сб', 'вс'],
	'en':['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};

console.log(array[lang]);

/* второй задание */
let namePerson = prompt("Введите имя");

let result = namePerson === "Артём" ? "Директор" : 
             namePerson === "Максим" ? "Преподователь" : "Студент";
console.log(namePerson + " " + result);