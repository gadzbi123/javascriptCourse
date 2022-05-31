// console.log(134)
// let $func = 123;

// const numSasiad= prompt("ile panstwa?");
/*
const numSasiad= Number(prompt("ile panstwa?"));

if(numSasiad == 1)
{
    console.log("jeden");
}
else if(numSasiad > 1){
    console.log("Wiecej niz jęden")
}else
{
    console.log("no borders")
}

let kacper

console.log(typeof kacper)
*/

const birthKacper = 2000;
const curYear = 2022;
var birthAnia = 2007;
var ageAnia = 2022 - birthAnia;
console.log("Ania jest starsza od Kacper", birthAnia < birthKacper);
console.log("Ania jest pelnoletnia", ageAnia >= 18);

function calcBmi(mass, height) {
    return mass / (height ** 2);
}

let massKarol = 90;
let heightKarol = 1.73;
let bmiWojtek = calcBmi(massKarol + 5, heightKarol - 30);
let bmiKarol = calcBmi(massKarol, heightKarol);

console.log(`karol ma ${(Math.round(bmiKarol * 100) / 100)} bmi a wojtek ma (${bmiWojtek})  bmi`);

let yearStr = `1922`;
console.log(`to jest string ${yearStr}`, `a to jest number ` + Number(yearStr));

console.log('23' + '10' + 3);//dodawanie stringów
console.log('23' - '10' - 3);//odejmowanie liczb

console.log(Boolean(0));
console.log(Boolean({}));

console.log(18 == 19); //true bo bool 1 = 1
console.log(18 === 19); //false bo obie strony nie sa rowne

let arr1 = [100, 91, 101];
let arr2 = [100, 91, 100];

let avg1 = 0;
let avg2 = 0;

arr1.forEach(num => avg1 += num);
arr2.forEach(num => avg2 += num);

avg1 = avg1 / arr1.length;
avg2 = avg2 / arr2.length;

console.log(`srednia 1 druzyny to ${Number(avg1)}, a srednia 2 druzyny to ${avg2}`)

if(avg1 >= 100 || avg2 >= 100)
    if(avg1 === avg2)
        console.log(`druzyny zremisowaly z iloscia ${avg1}`);
    else
    console.log(`druzyna ${avg1 > avg2 ? 1 : 2} byla lepsza`);
else
    console.log(`zadna druzyna nie miala 100 pkt`);

////////////////////////////////

let bill = 470; //275, 40 , 470
let tip;
console.log(`Bill was ${bill} and the bill with tip is ${bill >= 50 && bill <=300 ? tip = bill * 1.2 : tip = bill * 1.15}`);
