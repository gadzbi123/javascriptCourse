//'use strict';
/* sversion: 11 */
// Data needed for a later exercise
// eslint-disable-next-line no-unused-vars
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// const arr = [1,2,3];
// const [a,b,c] = arr;
/*
let [second, , , first] = restaurant.categories;
console.log(first, second);
[second, first] = [first, second];
console.log(first, second);

console.log(restaurant.order(2, 1));

const nested = [2, 3, [5, 9]];
const [x, , [y, z]] = nested;
console.log(x, y, z);

const [p = 1, , [, q = 2], r = 3] = nested;
console.log(p, q, r);

// const {name, openingHours, categories} = restaurant;
// console.log(name,openingHours,categories);

const {
  name: 'xd',
  openingHours: 'hours',
  categories: 'tags',
} = restaurant;

let a = 10,
  b = 20;
const obj = { a: 23, b: 11, c: 222 };
({ a, b } = obj);
console.log(a + b);

const { fri } = restaurant.openingHours;
const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(fri, o, c);

const arr = [7, 6, 5, 4];
const newArr = [9, 8, ...arr];

console.log(newArr);

const newMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(newMenu);

//obj
const newRestaurant = { foundedIn: 1999, ...restaurant, founder: 'Olaf' };
console.log(newRestaurant);

//spread
const array = [1, 2, ...[3, 4]];
console.log(array);

const [varA, varB, ...others] = [1, 2, 3, 4, 5];
console.log(varA, varB, others);

const [pizza, , risotto, ...starters] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, starters);

const { sat, ...week } = { ...restaurant.openingHours };

console.log(sat, week);

// funct
const add = function (...args) {
  let sum = 0;
  args.forEach(number => {
    sum += parseInt(number);
  });
  return sum;
};

const numArray = [2, 8, 11];

console.log(`${add(1, 3, 5, 7, 9)}`);
console.log(`${add(...numArray)}`);

console.log('lol' && 5);
console.log(0 && 'xd');

restaurant.openingHours && console.log(restaurant.openingHours.sat);

let guest = NaN;
const guestCorrect = guest ?? 10;

console.log(guestCorrect);

const rest1 = {
  name: 'Capri',
  numGuest: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovicno Borjio',
};

//OR ass op
//rest1.numGuest = rest1.numGuest || 10;
//rest2.numGuest = rest2.numGuest || 10;
// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

//nullish assignment operator
rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

console.log(rest1.numGuest);
console.log(rest2.numGuest);
console.log(3 && [3, 5, 8]);
console.log('--------------------');

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

// for (const item of menu.entries()) console.log(`${item[0] + 1}: ${item[1]}`);
for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);

//optional chaining
console.log(restaurant.openingHours.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (let day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`on ${day} we open at ${open}`);
}

console.log(Object.keys(restaurant.openingHours));
console.log(Object.values(restaurant.openingHours));
console.log(Object.entries(restaurant.openingHours));
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Rissoto',
  'Pizza',
  'Pasta',
]);

console.log(ordersSet);
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Rissoto');
console.log(ordersSet);
// ordersSet.clear();

for (const order of ordersSet) console.log(order);
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];

console.log(staffUnique);
console.log(new Set(staff).size);
console.log(new Set('KacperNitkiewicz').size);
*/

const rest = new Map();
rest.set('name', 'classico italiano');
rest.set(1, 'Italy');
rest.set(2, 'Portugal');
rest
  .set('cat', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');
console.log(rest);
console.log(rest.get('cat')[2]);

const time = 25;
let string;
rest.get('open') < time && time < rest.get('close')
  ? (string = rest.get(true))
  : (string = rest.get(false));

console.log(string);
