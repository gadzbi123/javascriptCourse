'use strict';
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }
  break() {
    this.speed -= 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }
}

class EV extends Car {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  accelerate() {
    this.speed += 10;
    this.#charge -= 10;
    console.log(
      `${this.make} is going at ${this.speed} km/h and charge is ${
        this.#charge
      }`
    );
    return this;
  }

  chargeBattery() {
    this.#charge += 10;
    console.log(`${this.make}'s charge increased ${this.#charge}`);
    return this;
  }
}

const car1 = new EV('ford', 100, 60);
car1.accelerate().accelerate().accelerate().break().chargeBattery();
//Chall2
/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
/*
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  //Methods
  accelerate() {
    this.speed = Number(this.speed) + 10;
    console.log(`Speed of ${this.make} is ${this.speed}`);
  }
  break() {
    this.speed = Number(this.speed) - 10;
    console.log(`Speed of ${this.make} is ${this.speed}`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const car1 = new Car('car1', 100);

car1.accelerate();
car1.accelerate();
car1.break();
car1.break();

console.log(car1.speedUS);
car1.speed = 150;
console.log(car1.speedUS);*/
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

//Chall1
/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed; // km per h
};

Car.prototype.accelerate = function () {
  this.speed = Number(this.speed) + 10;
  console.log(this.make + ' speed is ' + this.speed);
};

Car.prototype.break = function () {
  this.speed = this.speed - 5;
  if (this.speed < 0) this.speed = 0;
  console.log(this.make + ' speed is ' + this.speed);
};

const punto = new Car('Punto', '50');
const seat = new Car('Seat', '10');
punto.accelerate();
punto.break();
punto.break();

seat.break();
seat.break();
seat.break();
seat.accelerate();
seat.accelerate();
seat.break();

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
*/
