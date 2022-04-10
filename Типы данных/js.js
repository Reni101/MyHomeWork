/* /*  let str = "Привет";
alert( str.toUpperCase() );



// let str = "Привет"; примитивы не являются объектами
let str = {
	sayHi: "Привет" 
} ;
str.test = 5;
alert(str.test);

let billion = 1e9;  // 1 миллиард, буквально: 1 и 9 нулей
alert( 7.3e9 );

let ms = 1e-6;
let ms = 0.000001;


let num = 255; //Метод num.toString(base) возвращает строковое представление числа num в системе счисления base.

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111

alert( 123456..toString(36) );

Math.floor
Округление в меньшую сторону: 3.1 становится 3, а -1.1 — -2.

Math.ceil
Округление в большую сторону: 3.1 становится 4, а -1.1 — -1.

Math.round
Округление до ближайшего целого: 3.1 становится 3, 3.6 — 4, а -1.1 — -1.

Math.trunc (не поддерживается в Internet Explorer)
Производит удаление дробной части без округления: 3.1 становится 3, а -1.1 — -1.

Метод toFixed(n) округляет число до n знаков после запятой 
и возвращает строковое представление результата.

alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, вернётся только целая часть
alert( parseFloat('12.3.4') ); // 12.3, произойдёт остановка чтения на второй точке

Math.random()
Возвращает псевдослучайное число в диапазоне от 0 (включительно) до 1 (но не включая 1)
alert( Math.random() );

Math.max(a, b, c...) / Math.min(a, b, c...)
Возвращает наибольшее/наименьшее число из перечисленных аргументов.

alert( Math.max(3, 5, -10, 0, 1) ); // 5

Math.pow(n, power)
Возвращает число n, возведённое в степень power
alert( Math.pow(2, 10) );  2 в степени 10 = 1024 


let a = +prompt("Введиет превое чилсо");
let b = +prompt("Введиет второе чилсо");

console.log( a + b);

function readNumber() {
	let num;
	do {
		num = +prompt("Введите число");
	} 
	while (!isFinite(num));

	if (num === null || num === "") {
		return null;
	}
	return +num;
}

console.log(readNumber());


let i = 0;
while (i != 10) { // i < 10
  i += 0.2;
}
/таму шо i не станет 10



function random(min, max) {
	return Math.floor(Math.random() * (max + 1 - min) + min);
	 
}
console.log(random(2,6))


function randomInteger(min, max) {
	// получить случайное число от (min-0.5) до (max+0.5)
	let rand = min - 0.5 + Math.random() * (max - min + 1);
	return Math.round(rand);
  }
alert( randomInteger(1, 3) );


  function randomInteger(min, max) {
	// случайное число от min до (max+1)
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
  }
alert( randomInteger(1, 3) );


Одинарные и двойные кавычки работают, по сути, одинаково, 
а если использовать обратные кавычки, 
то в такую строку мы сможем вставлять произвольные выражения, обернув их в ${…}:

function sum(a, b) {
	return a + b;
  }
alert(`1 + 2 = ${sum(1, 2)}.`);

Ещё одно преимущество обратных кавычек — 
они могут занимать более одной строки, вот так:
let guestList = `Guests:
 * John
 * Pete
 * Mary
`;
alert(guestList);



Многострочные строки также можно создавать с помощью одинарных и двойных кавычек, 
используя так называемый «символ перевода строки», который записывается как \n:

let guestList = "Guests:\n * John\n * Pete\n * Mary";
alert(guestList);

Примеры с Юникодом:
alert( "\u{1F60D}" );


let str = "Hello";
 console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str.charAt(3));
console.log(str[str.length - 1]); 

//Квадратные скобки — современный способ получить символ, 
//в то время как charAt существует в основном по историческим причинам.

//Также можно перебрать строку посимвольно, используя for..of:

for(let char of str) {
	console.log(char);
}

//Можно создать новую строку и записать её в ту же самую переменную вместо старой.

let str = 'Hi';
str = 'h' + str[1]; // заменяем строку
console.log( str ); // hi

Поиск подстроки
Существует несколько способов поиска подстроки.

str.indexOf(substr, pos).

Он ищет подстроку substr в строке str, начиная с позиции pos, и возвращает позицию, 
на которой располагается совпадение, либо -1 при отсутствии совпадений.

let str = 'Widget with id';
console.log(str.indexOf("id", 4)); //поиск чувствителен к регистру



function foundPosition (str, target){
let pos = 0;
while (true) {
	let foundPos = str.indexOf(target, pos);
	if(foundPos == -1) break;

	console.log(`Найдено тут: ${foundPos}`);
	pos = foundPos +1;
	}
};
foundPosition("Ослик Иа-Иа посмотрел на виадук", "Иа" );
 str.lastIndexOf(substr, position)
Также есть похожий метод str.lastIndexOf(substr, position), который ищет с конца строки к её началу.

Он используется тогда, когда нужно получить самое 
последнее вхождение: перед концом строки или начинающееся 
до (включительно) определённой позиции. 

Более современный метод str.includes(substr, pos) возвращает true, 
если в строке str есть подстрока substr, либо false, если нет.
Необязательный второй аргумент str.includes позволяет 
начать поиск с определённой позиции:

console.log( "Widget with id".includes("Widget") ); // true

Методы str.startsWith и str.endsWith проверяют, соответственно, начинается ли и заканчивается ли строка определённой строкой:



console.log( "Widget".startsWith("id") ); // false, "Wid" — начало "Widget" а id середина
console.log( "Widget".endsWith("get") ); // true, "get" — окончание "Widget"


Получение подстроки
В JavaScr/* ipt есть 3 метода для получения подстроки: substring, substr и slice.


str.slice(start [, end])
Возвращает часть строки от start до (не включая) end.
Если аргумент end отсутствует, slice возвращает символы до конца строки
Также для start/end можно задавать отрицательные значения. Это означает, что позиция определена как заданное количество символов с конца строки:

let str = "stringify";
// начинаем с позиции 4 справа, а заканчиваем на позиции 1 справа
alert( str.slice(-4, -1) ); // gif

let str = "stringify";
console.log(str.slice(2,5))


str.substring(start [, end])
Возвращает часть строки между start и end (не включая) end.


str.substr(start [, length])
Возвращает часть строки от start длины length.

В противоположность предыдущим методам, 
этот позволяет указать длину вместо конечной позиции:
let str = "stringify";
// ring, получаем 4 символа, начиная с позиции 2
alert( str.substr(2, 4) );

str.codePointAt(pos)
Возвращает код для символа, находящегося на позиции pos:
// одна и та же буква в нижнем и верхнем регистре
// будет иметь разные коды
alert( "z".codePointAt(0) ); // 122
alert( "Z".codePointAt(0) ); // 90

String.fromCodePoint(code)
Создаёт символ по его коду code




function ucFirst(str) {
	return str[0].toUpperCase() + str.slice(1);
}

//console.log(ucFirst("максим") );

function checkSpam(str) {
	let low = str.toLowerCase();
	if(low.includes('viagra') || low.includes('xxx') ) {
		return true;
	} return false;
}


//console.log(checkSpam('buy ViAgRA now'));
//console.log(checkSpam('free xxxxx') );
//console.log(checkSpam("innocent rabbit") );


function truncate(str, maxlength) {
	let answer;
	if(str.length > maxlength) {
	answer= str.slice(0, maxlength - 3) + "...";
		return answer;
	} return str;
} 

//console.log(truncate("123456789", 8))


function extractCurrencyValue(str) {
	//return str.slice(1)
	return parseInt(str)
}

console.log (extractCurrencyValue("120$"));

push добавляет элемент в конец.
pop удаляет последний элемент.
shift удаляет из массива первый элемент и возвращает 
unshift добавляет элемент в начало 

arr.push(element1, ..., elementN)
arr.pop()
arr.shift
arr.unshift


let arr = new Array("Яблоко", "Груша", "и тд");
 
let arr = ["Яблоко", "Апельсин", "Груша"];
for (let i = 0; i < arr.length; i++) {
  alert( arr[i] );
}





let fruits = ["Яблоко", "Апельсин", "Слива"];

for (let fruit of fruits) {
  console.log( fruit );
}



let styles = ["Джаз", "Блюз",]
styles.push("Рок-н-ролл")
styles[Math.floor((styles.length - 1) / 2)] = "Классика";

console.log(styles.shift())
styles.unshift("Рэп", "Регги")
console.log(styles)


let arr = ["a", "b"];
arr.push(function() {
  alert( this );
})
arr[2]() //У массива в итоге 3 элемента: сначала их было 2, плюс функция.




Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».



function sumInput(){
	let arr = [];

	while(true){
		let a = prompt("Введите число в массив");
		if(a === "" || a === null || !isFinite(a)) break;

		arr.push(+a)
	}


	let sum = 0;
			for (let number of numbers) {
				sum += number;
  }
	   return sum;
}

console.log(sumInput());



let arr = ["Я", "изучаю", "JavaScript"];
arr.splice(1, 1); // начиная с позиции 1, удалить 1 элемент
// осталось ["Я", "JavaScript"]


let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// удалить 3 первых элемента и заменить их другими
arr.splice(0, 3, "Давай", "танцевать");
// теперь ["Давай", "танцевать", "прямо", "сейчас"]


splice возвращает массив из удалённых элементов:
let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
let removed = arr.splice(0, 2);
alert( removed ); // "Я", "изучаю" <-- массив из удалённых элементов


Метод splice также может вставлять элементы без удаления, 
для этого достаточно установить deleteCount в 0:
let arr = ["Я", "изучаю", "JavaScript"];
// с позиции 2 удалить. 0 элементов вставить. "сложный", "язык"
arr.splice(2, 0, "сложный", "язык");
alert( arr ); // "Я", "изучаю", "сложный", "язык", "JavaScript"


let arr = ["t", "e", "s", "t"];
alert( arr.slice(1, 3) ); // e,s (копирует с 1 до 3)
alert( arr.slice(-2) ); // s,t (копирует с -2 до конца)
	

Перебор: forEach

Метод arr.forEach позволяет запускать функцию для каждого элемента массива.

Его синтаксис:

arr.forEach(function(item, index, array) {
  // ... делать что-то с item
});

["Bilbo", "Gandalf", "Nazgul"].forEach(console.log);

Поиск в массиве

indexOf/lastIndexOf и includes
arr.indexOf(item, from) ищет item, начиная с индекса from, и возвращает индекс, на котором был найден искомый элемент, в противном случае -1.
arr.lastIndexOf(item, from) – то же самое, но ищет справа налево.
arr.includes(item, from) – ищет item, начиная с индекса from, и возвращает true, если поиск успешен.



let result = arr.find(function(item, index, array) {
	// если true - возвращается текущий элемент и перебор прерывается
	// если все итерации оказались ложными, возвращается undefined
  });

  let users = [
	{id: 1, name: "Вася"},
	{id: 2, name: "Петя"},
	{id: 3, name: "Маша"}
  ];
  
  let user = users.find(item => item.id == 1);
   alert(user.name); // Вася

 

   let users = [
		{id: 1, name: "Вася"},
		{id: 2, name: "Максим"},
		{id: 3, name: "Маша"}
  ];
  
  let user = users.find(item => item.id == 2);
  
  console.log(user.name); 




  let result = arr.map(function(item, index, array) {
	// возвращается новое значение вместо элемента
  });
  Он вызывает функцию для каждого элемента массива и 
  возвращает массив результатов выполнения этой функции.


Например, здесь мы преобразуем каждый элемент в его длину:

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6


let arr = [ 1, 2, 15 ];
function compare(a, b) {
	if (a > b) return 1; // если первое значение больше второго
	if (a == b) return 0; // если равны
	if (a < b) return -1; // если первое значение меньше второго
  }

  Метод str.split(delim) разбивает строку на массив 
  по заданному разделителю delim.

let names = 'Вася, Петя, Маша';
let arr = names.split(', ');

for (let name of arr) {
  alert( `Сообщение получат: ${name}.` ); 
  // Сообщение получат: Вася (и другие имена)
}
Вызов split(s) с пустым аргументом s разбил бы строку на массив букв

Вызов arr.join(glue) делает в точности противоположное split. Он создаёт строку из элементов arr, вставляя glue между ними.
let arr = ['Вася', 'Петя', 'Маша'];
let str = arr.join(';'); // объединить массив в строку через ;
alert( str ); // Вася;Петя;Маша
  

*/
/* 
fun camelize(str) {
	str.split("-");
	str.join()
} 

function camelize(str) {
	return str.split('-').map(
		(word, index) => index == 0 ? word : word[0].toUpperCase() + 
		word.slice(1)
	  )
	  .join(''); 
  }

  console.log(camelize("background-color"))
  console.log(camelize("list-style-image"))


*/
/* 
let range = {
	from: 1,
	to: 5
};

range[Symbol.iterator] = function () {
	return {
		current: this.from,
		last: this.to,

		next() {
			if (this.current <= this.last) {
				return { done: false, value: this.current++ };
			} else {
				return { done: true }
			}
		}
	};
};

for (let num of range) {
	console.log(num); // 1, затем 2, 3, 4, 5
}

for (let char of "test") {
	console.log(char);
} */
/* 
new Map() – создаёт коллекцию.
map.set(key, value) – записывает по ключу key значение value.
map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
map.delete(key) – удаляет элемент по ключу key.
map.clear() – очищает коллекцию от всех элементов.
map.size – возвращает текущее количество элементов. */

import { Console } from "console";



/* let map = new Map();
map.set("1", "str1");
map.set(1, "num1");
map.set(true,"bool1");

map.set("1", "str1")
  .set(1, "num1")
  .set(true, "bool1");

console.log(map.get(1));
console.log(map.get(true)); */


//Map может использовать объекты в качестве ключей.

/* 
let john = {
	name: "John",
};

let visitsCountMap = new Map();
// объект john - это ключ для значения в объекте Map
visitsCountMap.set(john, 123);
console.log(visitsCountMap.get(john));

Для перебора коллекции Map есть 3 метода:

map.keys() – возвращает итерируемый объект по ключам,
map.values() – возвращает итерируемый объект по значениям,
map.entries() – возвращает итерируемый объект по парам вида 
[ключ, значение], этот вариант используется по умолчанию в for..of. */
/* 

let recipeMap = new Map([
	["огурец", 500],
	["помидор", 350],
	["лук", 50]
]);
// перебор по ключам
for (let vegetable of recipeMap.keys()) {
	alert(vegetable); // огурец, помидор, лук
}
// перебор по значениям 
for (let amount of recipeMap.values()) {
	alert(amount); // 500, 350, 50
}
// перебор по элементам в формате [ключ, значение]
for (let entry of recipeMap) {
	alert(entry); // огурец,500 (и так далее) */

/* 	Map – коллекция пар ключ-значение.

	Методы и свойства:
	
	new Map([iterable]) – создаёт коллекцию, можно указать перебираемый объект (обычно массив) из пар [ключ,значение] для инициализации.
	map.set(key, value) – записывает по ключу key значение value.
	map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
	map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
	map.delete(key) – удаляет элемент по ключу key.
	map.clear() – очищает коллекцию от всех элементов.
	map.size – возвращает текущее количество элементов.
	Отличия от обычного объекта Object:
	
	Что угодно может быть ключом, в том числе и объекты.
	Есть дополнительные методы, свойство size.
	Set – коллекция уникальных значений, так называемое «множество».
	
	Методы и свойства:
	
	new Set([iterable]) – создаёт Set, можно указать перебираемый объект со значениями для инициализации.
	set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
	set.delete(value) – удаляет значение, возвращает true если value было в множестве на момент вызова, иначе false.
	set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
	set.clear() – удаляет все имеющиеся значения.
	set.size – возвращает количество элементов в множестве. 
	
	
	*/

let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(title); // Consul
