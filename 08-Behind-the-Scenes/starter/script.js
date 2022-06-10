'use strict';
/*
function calcAge(birthYear){
    const age = 2037 - birthYear;
    return age;
}

const firstName = 'Kacper';
console.log(calcAge(2000));

let x = "lol";
let y = 'a'
if(x === "lol"){
    let x = 'xd';
    y = 'b'
}
console.log(x); // output: lol
console.log(y); // output: b
*/

// console.log(this);

const kacper = {
    name: "kacper",
    year: 2000,
    calcAge: function(){
        console.log(this, 2022-this.years);
    },
    calcAgeArrow: () => console.log(2022 - this.year),
    family: ['tomek', 'sabina']
};

// const ala= kacper;
const ala = Object.assign({},kacper);

// kacper.calcAge();
// kacper.calcAgeArrow();

ala.name = "ala";
kacper.family.push("ala");
console.log(ala);
console.log(kacper);