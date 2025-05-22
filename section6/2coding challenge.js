const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map((age) => (age >= 2 ? age * 2 : 16 + age * 4));
  const adults = humanAge.filter((age) => age >= 18);
  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  return average;
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
