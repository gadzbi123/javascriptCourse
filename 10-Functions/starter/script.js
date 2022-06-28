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

*/
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} plane, number: ${this.iataCode}${flightNum}`
    );
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
