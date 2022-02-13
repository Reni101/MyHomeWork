'use strict'

/*var x = '3';
switch(x){
	case '1' : alert('Здесь 1');
		break;
	case '2' : alert('Здесь 2');
		break;	
	case '3' : alert('Здесь 3');
		break;
	case '4' : alert('Здесь 4');
		break;
	default: alert ('Совпадений не было')
	
} 

var x = prompt('Введите первое число', 100);
var y = prompt('Введите второне число', 100);
var z = prompt('Введите 1,чтобы сработал знак + 2,чтобы - 3,чтобы *, 4 чтобы ');
var x = parseInt(x);
var y = parseInt(y);
var result;

switch(z){
	case '1' : result = x+y;
		break;
	case '2' : result = x-y;
		break;	
	case '3' : result = x*y;
		break;
	case '4' : result = x/y;
		break;
	default: result = 'ты делай как просят'
}
alert(result); 
 
if (z == 1){
	result = +x + +y;
}
else if (z == 2){
	result = x-y;
}
else if (z == 3){
	result = x*y;
}
else if (z == 4){
	result = x/y;
}



alert(result);



let  myBirthday = '03.02.1995';
alert(myBirthday);

let admin 
let name = 'Джон';
admin = name;
alert(admin); 

//let age = prompt("Сколько тебе лет?", 100);
//alert(`Тебе ${age} лет!`);

//let isBoss = confirm("Ты здесь Босс?");
//alert( isBoss ); // true, если нажата OK

//let yourName = prompt('Как тебя зовут?', '')
//alert (`Твоё имя - ${yourName}`)

//Сокращённая арифметика с присваиванием


let n = 2;
n = n + 5;
n = n * 2;

 
 
//let n = 2;
//n += 5; // теперь n = 7 (работает как n = n + 5)
//n *= 2; // теперь n = 14 (работает как n = n * 2)

//alert( n ); // 14


//Подобные краткие формы записи существуют для всех арифметических и
//побитовых операторов: /=, -= и так далее.

//Вызов с присваиванием имеет в точности такой же приоритет
//как обычное присваивание, то есть выполнится после большинства других операций


 Инкремент/декремент
Одной из наиболее частых числовых операций является увеличение или уменьшение на единицу.

Для этого существуют даже специальные операторы:

Инкремент ++ увеличивает переменную на 1:

let counter = 2;
counter++;        // работает как counter = counter + 1, просто запись короче
alert( counter ); // 3
Декремент -- уменьшает переменную на 1:

let counter = 2;
counter--;        // работает как counter = counter - 1, просто запись короче
alert( counter ); // 1
 
 
/*let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(+a + +b); // 12


let a = +prompt("Первое число?", 1);
let b = +prompt("Второе число?", 2);

alert(a + b); // 12 

/*let year = prompt('скажи год моего рождения');
if (year == 1995){
	alert('ты прав');
}  else if(year > 1995){
	alert('Много');
} else if(year < 1995){
	alert('Мало');
} else {
	alert('пиши цифры')
}



var x = prompt('Введите первое число', 100);
var y = prompt('Введите второне число', 100);
var z = prompt('1 для + ; 2 для - ; 3 для * ; 4 для / ');
var a;
 if (z == 1){
	alert(a = +x + +y);
} else if (z == 2){
	alert (a = x-y);
} else if (z == 3){
	alert (a = x*y);
} else if (z == 4){
	alert (a = x/y)
} else {
	alert('Выполняй условия')
}


/*if (z == 1){
	a = +x + +y;
} else if (z == 2){
	a = x-y;
} else if (z == 3){
	a = x*y;
} else if (z == 4){
	a = x/y
} else {
	a ='Выполняй условия'
}
alert(a) 

let company = prompt('Какая компания создала JavaScript?', '');

if (company == 'Netscape') {
  company = "Правильно.";
} else {
  company ='Неправильно.';
}
alert(company); 

let nameJS = prompt('Какое «официальное» название JavaScript', "")
if (nameJS == 'ECMAScript'){
	alert("Ты умничка!");
} else alert("ну такое стыдно не знать") 

let Numbers = prompt('Введите число', 100)
if (Numbers > 0){
	alert (1);
} else if (Numbers < 0){
	alert(-1)
} else  alert(0) 

let result;
if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}

let result = (a + b < 4) ? 'Мало' : 'Много'


let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}


let Login = prompt('Введите логин', "");
let message = (Login == "Сотрудник") ? "Привет" :
			  (Login == "Директор")	? "Здравствуйте" :
			  (Login == "") ? "Нет логина" :
			  "";
alert (message); */