const calcAverageHumanAge1 = function (ages) {
  const average =
    ages
      .map((age) => (age >= 2 ? age * 2 : 16 + age * 4))
      .filter((age) => age >= 18)
      .reduce((acc, age) => acc + age, 0) / length;
  return average;
};

calcAverageHumanAge1([5, 2, 4, 1, 15, 8, 3]);
