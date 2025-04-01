const calcAverage = (a, b, c) => (a + b + c) / 3;
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(85, 54, 41);
const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins!");
  }
};
checkWinner(avgDolphins, avgKoalas);
checkWinner(576, 111);
