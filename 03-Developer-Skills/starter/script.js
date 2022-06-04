// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
let hasDriversLicence = false;
const passTest = true;

if (passTest)
    hasDriversLicence = true;

if (hasDriversLicence) console.log(`i can drive`);

function dog(owner, countDogs) {
    return `A ${owner} is walking with ${countDogs} dog(s)`;
}
const sentence = dog("kid", 4);

//Arrow func
const calcAge = birthYear => 2022 - birthYear;
console.log(calcAge(1996));

const yearsToRetirement = (name,birthYeah) => {
    const age = 2022 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${name} retires in ${retirement} years`;
}

// console.log(yearsToRetirement(2000));
console.log(yearsToRetirement('Kacper',2000));


function multiplyDogs(dog){
    return dog*2;
}

function dog(owner, countDogs) {
    const multidogs = multiplyDogs(countDogs);
    return `A ${owner} is walking with ${multidogs} dog(s)`;
}

console.log(dog('alek', 4));
 // function toRetire(name, birthYeah) {}
const toRetire = function (name, birthYeah) {
    const age = 2022 - birthYeah;
    const retirement = 65 - age;
    if (retirement > 0)
        return retirement;
    else
        return -1;
    // return `${name} retires in ${retirement} years`;
}

console.log(toRetire('man',1950));

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(avgDolphin, avgCoala) {
    if (avgDolphin >= avgCoala * 2)
        console.log(`Dolphins win with the score ${avgDolphin} to ${avgCoala} against Coalas`)
    else if (avgCoala >= 2 * avgDolphin)
        console.log(`Coalas win with the score  ${avgCoala} to ${avgDolphin} against Dophins`)
    else
        console.log(`Dolphins tied with a score ${avgDolphin} to ${avgCoala} against Coalas`)
}

// const dolphins = calcAverage(6,9,12);
const dolphins = calcAverage(1,4,3);
const coalas = calcAverage(99,2,3);

checkWinner(dolphins,coalas);

let friends= ["wojtek","alek","marek"];
console.log(friends[1]);

const years = new Array(1222,3232,5433,1111);
const yearsLen = years.length;
// years[yearsLen] = 3;
years[yearsLen - 1] = 3;
console.log(years[yearsLen - 1]);
years.push(3332);
years.unshift(1337); //add first
console.log(years);
years.shift(); //remove first
console.log(years);
console.log(years.indexOf(0));
console.log(years.includes(3232));


const calcTip = bill => {
    return bill >=50 && bill <=300 ? bill * .15 : bill * .2;
}

const bills = [125,555,44];

const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];

const total = [bills[0]+ tips[0],bills[1]+ tips[1],bills[2]+ tips[2]];

console.log(tips,total);

const Kacper = {
    firstName: 'Kacper',
    lastName: 'Nitkiewcz',
    age: 2022 - 2000,
    job: 'programer',
    friends: ['Ala', 'Bartek', 'Suder']
}

let change = 'first';
console.log(Kacper.firstName === Kacper[change + 'Name']);

const value = prompt("what value you want?");

console.log(Kacper[value] ? Kacper[value] : 'write correct value');

const Kacper = {
    firstName: 'Kacper',
    lastName: 'Nitkiewcz',
    birth:  2000,
    job: 'programer',
    friends: ['Ala', 'Bartek', 'Suder'],
    calcAgeOld: function (birth) {return 2022-birth},
    calcAge: function () {return 2022-this.birth}
}

const sentence = `${Kacper.firstName} has ${Kacper.friends.length} friends and his best friend is ${Kacper.friends[2]}`;

console.log(sentence);

console.log(Kacper.calcAgeOld(1991))
console.log(Kacper['calcAgeOld'](1991))
console.log(Kacper.calcAge())


const Kacper = {
    name: 'Kacper',
    mass: 85,
    height: 1.73

}


const Bartek = {
    name: 'Bartek',
    mass: 68,
    height: 1.76,
    calcBMI:function () {return this.mass / (this.height * this.height)}
}

console.log(`${Bartek.name} has ${Bartek.calcBMI()} BMI`);

*/

const Kacper = [
    'Kacper',
    'Nitkiewcz',
    2000,
    'programer',
    ['Ala', 'Bartek', 'Suder']
    //calcAge: function () {return 2022-this.birth}
    //calcAgeOld: function (birth) {return 2022-birth},
];

const Bartek = {
    name: 'Bartek',
    mass: 68,
    height: 1.76,
    calcBMI: function () {
        return this.mass / (this.height * this.height)
    }
};

for (let i = 0; i < 5; i++) {
    console.log(Kacper[i], typeof Kacper[i]);
}


const years = [1223, 3255, 2567, 2346];
const age = [];
for (let i = 0; i < years.length; i++) {
    age.push(4000 - years[i]);
}
console.log(age);

let dice = Math.trunc(Math.random() * 6) + 1;
let count = 1
while (dice !== 6) {
    count++;
    console.log(dice);
    dice = Math.trunc(Math.random() * 6) + 1;
}
if (count === 1)
    console.log(`we got ${dice} after ${count} try`);
else
    console.log(`we got ${dice} after ${count} tries`);