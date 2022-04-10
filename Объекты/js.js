/* 
let user = {
	name: "Джон",
	hi() { alert(this.name); },
	bye() { alert("Пока"); }
  };

user.name == "Джон1" ? user.hi() : user.bye();


let user = {
	name: "Джон",
	hi() { alert(this.name); }
  };
  
  
  let hi = user.hi.bind(user);
  hi(); 


  function User(name, age) {
	this.name = name;
	this.age = age;
	this.isAdmin = false;
  }
  
  let user = new User("Вася", 15);

  console.log(user) 


*/
/* 
  function BigUser() {
	this.name = "Вася";
	return { name: "Godzilla" };  //Другими словами, return с объектом возвращает объект,
							 // в любом другом случае конструктор вернёт this.
  }
  
  let biguser =  new BigUser();

  
  function SmallUser() {
	this.name = "Вася";
		return 15;
  }
console.log( new SmallUser());   */


/*   function User(name) {
	this.name = name;
  
	this.sayHi = function() {
	  alert( "Меня зовут: " + this.name );
	};
  }
  
  let vasya = new User("Максим");
  
  vasya.sayHi();  */

/*   let obj = {};
  function A () {
	return obj;
  }
  function B (name) {
	return obj;;
  }
	let a = new A;
	let b = new B;
console.log(a === b); // true, я  в шоке
 */

/*

function Calculator() {
	this.read = function() {
		this.a = +prompt('Введите первое число');
		this.b = +prompt('Введите первое число');
	};

	this.sum = function() {
		return this.a + this.b;
	};

	this.mul = function() {
		return this.a * this.b;
	};
}

let calculator = new Calculator();
calculator.read();

alert( "Sum = " + calculator.sum() );
alert( "Mul = " + calculator.mul() ); 


*/

//this.value += +prompt ("введите число");

/* 
function Accumulator(startingValue) {
	this.value = startingValue;
	this.read = function() {
		this.num = +prompt("введите число");
		this.value = this.num + +this.value 
	}
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();

console.log(accumulator.value);

let user = {}; // пользователь без адреса
alert( user?.address?.street ); // undefined (без ошибки)

let id = Symbol("id");
alert(id.description); // id

 */

/* let user = {
	name: "Вася"
  };
 let id = Symbol("id");
  
user[id] = 1; */

let user = {
	name: "John",
	money: 1000,
	// для хинта равного "string"
	toString() {
		return `{name: "${this.name}"}`;
	},
	// для хинта равного "number" или "default"
	valueOf() {
		return this.money;
	}

};
alert(user); // toString -> {name: "John"}
// alert(+user); // valueOf -> 1000
// alert(user + 500);


let john = { name: "John" };
let weakMap = new WeakMap();
weakMap.set(john, "...");
john = null; // перезаписываем ссылку на объект
// объект john удалён из памяти!
weakMap.get(key)
weakMap.set(key, value)
weakMap.delete(key)
weakMap.has(key)

let visitsCountMap = new WeakMap(); // map: пользователь => число визитов
// увеличиваем счётчик
function countUser(user) {
	let count = visitsCountMap.get(user) || 0;
	visitsCountMap.set(user, count + 1);
}

let john = { name: "John" };
countUser(john); //ведём подсчёт посещений
// пользователь покинул нас
john = null;

WeakMap – это Map-подобная коллекция, позволяющая 
использовать в качестве ключей только объекты, и 
автоматически удаляющая их вместе с соответствующими значениями, как только они становятся недостижимыми иными путями.

WeakSet – это Set-подобная коллекция, которая хранит 
только объекты и удаляет их, как только они становятся 
недостижимыми иными путями.

Обе этих структуры данных не поддерживают методы и свойства, 
работающие со всем содержимым сразу или возвращающие информацию 
о размере коллекции. Возможны только операции на отдельном элементе 
коллекции.

WeakMap и WeakSet используются как вспомогательные структуры данных 
в дополнение к «основному» месту хранения объекта. Если объект удаляется из 
основного хранилища и нигде не используется, кроме как в качестве ключа 
в WeakMap или в WeakSet, то он будет удалён автоматически.
