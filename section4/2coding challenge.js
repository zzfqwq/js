const game1 = {
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

for (const [i, player] of game1.scored.entries()) {
  console.log(`Goal:${i + 1} ${player}`);
}

let sum = 0;
const odd1 = Object.values(game1.odds);
for (const odd of odd1) {
  sum += odd;
}
const avg = sum / odd1.length;
console.log(`Average odds:${avg.toFixed(2)}`);

for (const [key, value] of Object.entries(game1.odds)) {
  const teamStr = key == "x" ? "draw" : `victory ${game1[key]}`;
  console.log(`odd of ${teamStr}:${value}`);
}

const scorers = {};
for (const player of game1.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
