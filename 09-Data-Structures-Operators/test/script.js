"use strict";
/*
const players1 = ["gk1", "a", "b", "c", "d", "e"];
const players2 = ["gk2", "f", "g", "h", "i", "j"];

const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, "x", "y", "z"];

console.log(allPlayers);

const game = { odds: null };
const team1 = { ...game };
team1.odds = 0.4;
const team2 = { ...game };
team2.odds = 0.6;
console.log(game, team1);
console.log(game, team2);

const printGoal = (num_of_players) => {
  for (let i = 0; i < num_of_players; i++) {
    let randPlayer = Math.round(Math.random() * 11);
    let randGoal = Math.round(Math.random() * 5);
    console.log(allPlayers[randPlayer] + ":" + randGoal);
  }
};

printGoal(4);

team1.odds > team2.odds && console.log("Team 1 will win");
team1.odds < team2.odds && console.log("Team 2 will win");

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (let [i, name] of game.scored.entries())
console.log(`Goal nr ${i + 1}: ${name}`);

let avg = 0;
for (let odd of Object.values(game.odds)) {
  avg += parseInt(odd);
}
avg /= 3;
console.log(avg);

console.log(game.odds);

for (let [key, odd] of Object.entries(game.odds)) {
  console.log(
    `Odd of ${game[key] ? "victory " + game[key] : "draw"} are ${odd}`
  );
}
console.log("---------------");

const scorers = {};
for (let value of game.scored) {
  scorers[value] ? scorers[value]++ : (scorers[value] = 1);
}
console.log(scorers);

const allPlayers = [...game.players[0], ...game.players[1]];
for (let player of allPlayers) {
  if (scorers[player]) {
    console.log(
      `Player ${player} scored ${scorers[player]} ${
        scorers[player] > 1 ? "goals" : "goal"
      }`
      );
    }
  }
  
  */
/*
Challange 3
  Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

const gameEvSet = new Set([...gameEvents.values()]);

console.log(gameEvSet);

gameEvents.delete(64);
console.log(gameEvents);

const avgLog = {};
for (let [key, value] of gameEvents) {
  if (gameEvSet.has(value)) {
    if (!avgLog.hasOwnProperty(value)) avgLog[value] = 1;
    else avgLog[value] += 1;
  }
}
console.log(avgLog);

for (const [key, value] of Object.entries(avgLog)) {
  console.log(`Event ${key} happened on avrage every ${90 / value} minutes`);
}

for (let [min, event] of gameEvents.entries()) {
  console.log(`[${min < 46 ? "FIRST" : "SECOND"} HALF] ${min}: ${event}`);
}


//////////////////////////////////////
// Coding Challenge #4

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

let i = 1
let bird = "✅";
const toCamel = (sentence) => {
  let str = String(sentence.toLowerCase().trim());
  const array = str.split("_");
  const array2 = [];
  for (let word of array) {
    if (array[0] === word) {
      array2.push(word);
      continue;
    }
    array2.push((word.replace(word[0], word[0].toUpperCase()).padEnd(20) + bird.repeat(i)));
  }
  i++;
  let strCamel = array2.join("");
  console.log(strCamel);
};

toCamel("underscore_case");
toCamel("first_name");
toCamel("Some_Variable");
toCamel("calculate_AGE");
toCamel("delayed_departure");
