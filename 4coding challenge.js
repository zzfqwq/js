const bill = 301;
const tip = 50 <= bill <= 300 ? bill * 0.15 : bill * 0.2;
const total = bill + tips;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${total}`
);
