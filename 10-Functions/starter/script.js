/*
const bookings = []
const createBooking = function(flightNum,numPassengers = 1,price = 199*numPassengers){
    const booking= {
        flightNum,numPassengers,price
    }
    console.log(booking)
    bookings.push(booking)
}
createBooking('A322',6,)
createBooking('A321',2,)
createBooking('B322',undefined,35)
const flight = 'A322';
const Kacper = {
    name: 'Kacper Nitkiewicz',
    passport: 24573732,
};

const checkIn = function (flightNum, passanger) {
    flightNum = 'L999';
    passanger.name = 'Mr. ' + passanger.name;
    if (passanger.passport === 24573732) alert('check in');
    else alert('wrong passport');
};

const newPassport = person => {
    person.passport = Math.round(Math.random() * 100000000);
};

checkIn(flight, Kacper);
console.log(flight, Kacper);
const oneWord = word => word.replace(/ /g, '').toLowerCase();
const upperFirstWord = str => str.replace(str[0], str[0].toUpperCase());

const transformer = function (str, fn) {
    console.log(`Original String: ${str}`);
    console.log(`Transformed String: ${fn(str)}`);
    console.log(`fn Name: ${fn.name}`);
};

transformer('JavaScript is the best!', oneWord);

const high5 = () => console.log('✋');

document.body.addEventListener('click', high5);


const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};
const greet = greeting => name => console.log(`${greeting} ${name}`);
greet('Hey')('Kacper');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} plane, number: ${this.iataCode}${flightNum}`
      );
      this.bookings.push([name, flightNum]);
    },
  };
  
  lufthansa.book('2356', 'Kacper');
  lufthansa.book('111', 'Tomek');
  
  const book = lufthansa.book;
  
  const euroWings = {
    airline: 'EuroWings',
    iataCode: 'EW',
    bookings: [],
  };
  
  book.call(euroWings, 567, 'Jarek');
  
  const swiss = {
    airline: 'Swiss AirLines Co.',
    iataCode: 'SS',
    bookings: [],
  };
  
  book.call(swiss, 222, 'Arek');
  book.apply(swiss, [2111, 'Ala']);
  
  //bind
  const bookEW = book.bind(euroWings);
  const bookLH = book.bind(lufthansa);
bookEW(23, 'Janusz');

const bookEW23 = book.bind(euroWings, 23);
bookEW23('Czarek');

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this);
  console.log(this.planes);
};

document
.querySelector('.buy')
.addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial apliccation
const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 50));

const addTaxFood = addTax.bind(null, 0.23);

console.log(addTaxFood(100));

const addTaxes = rate => value => value + rate * value;

console.log(addTaxes(0.2)(20));


(() => {
  console.log('this will never run again');
})();

//clousre
const secureBooking = function () {
  let passangerCount = 0;
  return function () {
    passangerCount++;
    console.log(passangerCount + ' passengers');
  };
};

const booker = secureBooking();

booker();
booker();
booker();

*/
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);
h();
f();
console.dir(f);

const boardPassengers = (n, wait) => {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passangers`);
    console.log(`There are 3 groups, each with ${perGroup} persons`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(30, 3);
