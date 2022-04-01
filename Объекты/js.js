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
