'use strict'
/*
let func =(art1, arg2) => expression

Такой код создаёт функцию func с аргументами arg1..argN и 
вычисляет expression с правой стороны с их использованием, 
возвращая результат.

Другими словами, это более короткий вариант такой записи:

let func = function(arg, arg2) {
	return expression;
}

let sum = (a,b) => a+BigInt

// более короткая форма

let sum = function(a, b) {
	return a+b
};

alert(sum(1,2));

(a,b) => a+b

Если у нас только один аргумент, 
то круглые скобки вокруг параметров можно опустить, сделав запись ещё короче:

let double = n => n*2

alert(double(3));

Если нет аргументов, указываются пустые круглые скобки:

let sayHi = () => alert("hello!");
sayHi

Функции-стрелки могут быть использованы так же, как и Function Expression.

Например, для динамического создания функции:

let age = prompt("Сколько вам лет?", "")
let welcome = (age<18) ?
	() => alert('Hi'):
	() => alert('Welcome');
	
welcome();


Многострочные стрелочные функции

Порой нам нужно что-то посложнее, например, выполнить несколько инструкций. 
Это также возможно, нужно лишь заключить инструкции в фигурные скобки. 
И использовать return внутри них, как в обычной функции.



let sum =(a,b) => {
	let result = a+b
	return result;
};

alert(sum(2,4));

//                    homeWork

Перепишите с использованием функции-стрелки
Замените код Function Expression стрелочной функцией:

function ask(question, yes, no){
	if(confirm(question)) yes()
		else no ();
}

ask("Вы согласны&?",
	function() {alert("Вы согласились.");},
	function() {alert('Вы отменили выполнение');}
);

*/
function ask(question, yes, no){
	if(confirm(question)) yes()
		else no ();
}

ask("Вы согласны?",
	() => alert("Вы согласились."),
	() => alert("Вы отменили выполнение"),
	)
	
	//подсмотрел с запуском функции
	
