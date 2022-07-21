//import
/* eslint-disable no-undef */
/*
import payment, * as shoppingCard from './shoppingCard.js';

shoppingCard.addToCard('microwave', 4);

console.log(shoppingCard);
add('pizza');
add('bread', 2);
add('lasagna', 5);

console.log(shoppingCard.card);
import add, { card } from './shoppingCard.js';

const getPost = async function () {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await response.json();
    return { title: json.at(-1).title, body: json.at(-1).body };
};

// fun().then(obj => console.log(obj));
const lastPost = await getPost();
console.log(lastPost);
*/

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

if (module.hot) {
  module.hot.accept();
}
const state = {
  card: [
    { product: 'bread', quantity: 3 },
    { product: 'pizza', quantity: 6 },
  ],
  user: { loggedIn: true },
};

const stateClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(state);
console.log(stateClone);

class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}
const Kacper = new Person('Kacper');

import 'core-js/stable';
import 'regenerator-runtime/runtime';
