'use strict';
//declaration
class PersonCl {
  constructor(name, birth) {
    this.name = name;
    this.birth = birth;
  }
  //Methods are prototypes
  calcAge() {
    console.log(Number(new Date().getFullYear()) - this.birth);
  }
  get Age() {
    return Number(new Date().getFullYear()) - this.birth;
  }
  set name(name) {
    if (!name.includes(' ')) this._name = name;
    else alert(name + ' is not a full name');
  }
  get name() {
    return this._name;
  }

  //static is for object itself
  static hey() {
    console.log('👋');
  }
}

class StudentCl extends PersonCl {
  constructor(name, birth, course) {
    //super is needed first
    super(name, birth);
    this.course = course;
  }
  introduce() {
    console.log(
      `My name is ${this.name}, i was born in ${this.birth} and i study ${this.course}`
    );
  }
}

const martha = new StudentCl('Martha', 2012, 'PC');
// console.log(martha.name);
martha.introduce();
martha.calcAge();
/*
const Person = function (firstName = 'Jack', birthYear = 2000) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  // this.calcAge = () => Number(new Date().getFullYear()) - this.birthYear; //many functions after creating new obj Person
};
Person.prototype.calcAge = function () {
  console.log(Number(new Date().getFullYear() - this.birthYear));
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(
    `My name is ${this.firstName}, i was born in ${this.birthYear} and i study ${this.course}`
  );
};

Student.prototype.constructor = Student;

const mike = new Student('mike', 2020, 'PC');
console.log(mike);
mike.introduce();
mike.calcAge();
const account = {
  owner: 'kacper',
  movs: [200, 530, 12, 333],
  get latest() {
    return this.movs.slice(-1).pop();
  },
  set latest(mov) {
    this.movs.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movs);

//expresin
// const PersonCl = class {};


PersonCl.prototype.greet = function () {
  console.log('Hey ' + this.name);
};

const jessica = new PersonCl('Jessica', 1999);
jessica.calcAge();
jessica.greet();
console.log(jessica.Age);

jessica.name = 'jess';
jessica.greet();

PersonCl.hey();
// jessica.hey();

const PersonProto = {
  calcAge() {
    console.log(Number(new Date().getFullYear()) - this.birth);
  },
  init(name, birth) {
    this.name = name;
    this.birth = birth;
  },
};
const steve = Object.create(PersonProto);
steve.birth = 2000;
steve.calcAge();
const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1955);
sarah.calcAge();
const Person = function (firstName = 'Jack', birthYear = 2000) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  // this.calcAge = () => Number(new Date().getFullYear()) - this.birthYear; //many functions after creating obj Person
  console.log(this);
};

const Casper = new Person('Casper', 1991);
const randomGuy = new Person();

console.log(Casper instanceof Person);
// console.log(Gary.calcAge());

//Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  return Number(new Date().getFullYear()) - this.birthYear;
};
console.log(Casper.calcAge());
console.log(randomGuy.calcAge());

console.log(Casper.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(Casper));

Person.prototype.species = 'Homo Sapiens';
console.log(Casper, randomGuy.species);

console.log(Casper.hasOwnProperty('firstName')); //yes
console.log(Casper.hasOwnProperty('species')); //no

console.log(Casper.__proto__);
console.log(Casper.__proto__.__proto__);

const arr = [1, 5, 7, 9, 5];
console.log(arr.__proto__);

//DON'T DO IT
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

const map = new Map(arr.map(obj => [obj.key, obj.value]));
console.log(map.__proto__ === Map.__proto__);

const obj = { lol: 'lol', num: 5 };
// console.log(obj.__proto__);

const h1 = document.querySelector('h1');
console.log(h1.__proto__);

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birth);
  },
  init(name, birth) {
    this.name = name;
    this.birth = birth;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (name, birth, course) {
  PersonProto.init.call(this, name, birth);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(
    `My name is ${this.name}, i was born in ${this.birth} and i study ${this.course}`
    );
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2001, 'Cooking');
jay.introduce();
jay.calcAge();
console.log(jay);

*/

class Account {
  //Public
  locale = navigator.language;
  //Private
  #movements = [];
  #pin;
  //static
  static num = 10;
  static #numAdmin = 1111;
  constructor(owner, currency, pin, movements = []) {
    this.owner = owner;
    this.currency = currency;
    //protected
    this.#pin = pin;
  }

  getPin() {
    return this.#pin;
  }
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  //private
  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan()) {
      this.deposit(val);
      console.log('Loan approved');
      return this;
    }
  }

  static helper() {
    console.log('this is a account class');
  }
}

const acc1 = new Account('Kacper', 'PLN', '1111');
acc1.deposit(100);
acc1.deposit(200);
acc1.deposit(400);
acc1.withdraw(100);
acc1.withdraw(500);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

//Chaining
const movs = acc1
  .deposit(300)
  .deposit(500)
  .withdraw(300)
  .requestLoan(25000)
  .withdraw(4000)
  .getMovements();
console.log(movs);
