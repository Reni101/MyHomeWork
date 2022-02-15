"use stric"
 result = a ?? b
//result = (a !== null && a !== undefined) ? a : b;


let user;
alert(user ?? "Аноним"); // Аноним


let firstName = null;
let lastName = null;
let nickName = "Суперкодер";

// показывает первое определённое значение:
alert(firstName ?? lastName ?? nickName ?? "Аноним"); // Суперкодер

let firstName = null;
let lastName = null;
let nickName = "Суперкодер";

// показывает первое истинное значение:
alert(firstName || lastName || nickName || "Аноним"); // Суперкодер


let height = 0;
alert(height || 100); // 100
alert(height ?? 100); // 0

height || 100 проверяет, имеет ли переменная height ложное значение, что так и есть,
поэтому результатом является второй аргумент, т.е. 100.
height ?? 100 проверяет, что переменная height содержит null/undefined, а поскольку это не так,
то результатом является сама переменная height, т.е. 0.


let height = null;
let width = null;
// важно: используйте круглые скобки
let area = (height ?? 100) * (width ?? 50);
alert(area); // 5000

