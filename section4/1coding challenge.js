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

const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
const { team1, x: draw, team2 } = game.odds;
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals(game.scored); //1 goals were scored
printGoals(...game.scored); //4 goals were scored

//&&的短路逻辑 如果前面的判断为 true，才会执行右边的 console.log(...)
team1 < team2 && console.log("Team 1 is more likely to win"); //Team 1 is more likely to win
team1 > team2 && console.log("Team 2 is more likely to win"); //无输出
