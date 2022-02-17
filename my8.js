'use strict'
/*
switch(x){
	case 'value1': // if(x=== 'value1')
		...
	[break]
	case 'value2': //if (x=== 'value2')
		...
	[break]
	default:
	...
	[break]
}

Переменная x проверяется на строгое равенство первому значению value1,
затем второму value2 и так далее.
Если соответствие установлено – switch начинает выполняться от 
соответствующей директивы case и далее, до ближайшего break 
(или до конца switch).
Если ни один case не совпал – выполняется (если есть) вариант default. 

let a = 4;

switch(a) {
	case 3:
		alert('Маловато');
	break;
	case 4:
		alert('В точку');
	break;
	case 5:
		alert('Многовато');
	break
	default:
		alert('Нет таких значений');
}

Здесь оператор switch последовательно сравнит a со всеми вариантами из case.
Сначала 3, затем – так как нет совпадения – 4. Совпадение найдено, 
будет выполнен этот вариант, со строки alert( 'В точку!' ) и далее, 
до ближайшего break, который прервёт выполнение.
Если break нет, то выполнение пойдёт ниже по следующим case, 
при этом остальные проверки игнорируются.



let a = 2+2;
switch(a){
	case 3:
		alert('malo');
	case 4:
		alert('Bingo');
	case 5:
		alert('Mnogo');
	default:
		alert('None');
}  // Выполняется 3 алёрта бинго много ноне

Группировка «case»

let a = 5;
switch(a){
	case 4:
		alert('Правильно');
	break;
	case 3:
	case 5:
		alert('Неправильно');
		alert ('Многовато');
	break;
	
	default:
		alert('ну ты подумай ты шо');
}
Теперь оба варианта 3 и 5 выводят одно сообщение.

Тип имеет значение
Нужно отметить, что проверка на равенство всегда строгая. 
Значения должны быть одного типа, чтобы выполнялось равенство.

let arg = prompt('Введите число');
switch(arg) {
	case '0':
	case '1':
		alert('Один или нуль');
	break;
	
	case '2':
		alert('Два');
	break;
	case 3:
		alert('Никогда не выполнится ибо число 3 не равно страке 3');
	break;
	default:
		alert('Неизвестное значение');
	
}

Для '0' и '1' выполнится первый alert.
Для '2' – второй alert.
Но для 3, результат выполнения prompt будет строка "3", 
которая не соответствует строгому равенству === с числом 3. 
образом, мы имеем «мёртвый код» в case 3! Выполнится вариант default.

                           // HomeWork

Напишите "if", аналогичный "switch"
Напишите if..else, соответствующий следующему switch:

switch(browser){
	case 'Edge':
		alert('You have got the Edge');
	break;
	case 'Chrome':
	case 'Firefox':
	case 'Safari':
	case 'Opera':
		alert('Okay we support these browsers too');
	break;
	
	default:
		alert('we hope that this page looks ok!');
}
 
 // это я сам выполнин
let browser = prompt('Введите свой браузер');
if (browser == 'Edge') {
	alert('You have got the Edge');
}else if (browser == 'Chrome'){
	alert('Okay we support these browsers too')
}else if (browser == 'Firefox'){
	alert('Okay we support these browsers too')
}else if (browser == 'Safari'){
	alert('Okay we support these browsers too')
}else if (browser == 'Opera'){
	alert('Okay we support these browsers too')
}else alert('we hope that this page looks ok!');

// это ответ на сайте

if(browser == 'Edge') {
  alert("You've got the Edge!");
} else if (browser == 'Chrome'
 || browser == 'Firefox'
 || browser == 'Safari'
 || browser == 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}



Переписать условия "if" на "switch"
Перепишите код с использованием одной конструкции switch:

const number = +prompt('введите число между 0 и 3', '');

if( number === 0 ){
	alert('Вы ввели число 0');
}
if ( number === 1 ) {
	alert('Вы ввели число 1');
}
if ( number === 2 || number === 3) {
	alert('Вы ввели число 2, а может и 3');
}
*/

// я сделалЪ
let number = +prompt('Введите число между 0 и 3', '');
switch (number){
	case 0:
		alert('Вы ввели число 0');
	break;
	case 1:
		alert('Вы ввели число 1');
	break;
	case 2:
	case 3:
		alert('Вы ввели число 2');
		alert('А может быть число 3');
	break;
	default:
		alert('Ты что-то не то нажал');
}

