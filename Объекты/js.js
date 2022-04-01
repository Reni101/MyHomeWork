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
 */

  function User(name, age) {
	this.name = name;
	this.age = age;
	this.isAdmin = false;
  }
  
  let user = new User("Вася", 15);

  console.log(user)