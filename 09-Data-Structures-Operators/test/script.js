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

*/
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
