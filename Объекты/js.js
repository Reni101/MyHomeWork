/*  let str = "Привет";
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


*/


let fruits = ["Яблоко", "Апельсин", "Слива"];

for (let fruit of fruits) {
  console.log( fruit );
}
