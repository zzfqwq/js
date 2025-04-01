"use strict";

function logger() {
  console.log("My name is Jonas");
}

// calling / running / invoking function
logger();
logger();
logger();

//如果只写fruitProcessor(5,0) console.log会是5,0(因为第14行的代码)没有returnjuice 因为return的值需要存在一个变量里面再return
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));
fruitProcessor(5, 0);

// Function declaration：在 JavaScript 执行前被“提升”（Hoisting），即使你在函数定义之前调用，也不会出错。
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}

const age1 = calcAge1(1991);

// Function expression：不会被提升，只有在代码运行到 calcAge2 被赋值后，才能调用这个函数。
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
};

const age2 = calcAge2(1991);

console.log(age1, age2);

// Arrow function
const calcAge3 = (birthYeah) => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));

//Function calling other function
const cutPieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor1 = function (apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
};

console.log(fruitProcessor1(2, 3));

const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
};

const yearsUntilRetirement1 = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};

console.log(yearsUntilRetirement1(1991, "Jonas"));
console.log(yearsUntilRetirement1(1950, "Mike"));

//new array
// Exercise
const calcAgeNew = function (birthYeah) {
  return 2037 - birthYeah;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age11 = calcAge(years[0]);
const age22 = calcAge(years[1]);
const age33 = calcAge(years[years.length - 1]);
console.log(age11, age22, age33);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

const friends = ["Michael", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John"); //add to the beginning
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);

console.log(friends.includes("Steven"));

console.log(friends.includes("Bob"));

console.log(friends.includes(23));
if (friends.includes("Steven"));
console.log("You have a friend called Steven");

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
// );

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job, and friends"
//   );
// }

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);

const jonas2 = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYeah: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // }

  // calcAge: function () {
  //   console.log(this);
  //   return 2037 - this.birthYeah;
  // },
  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      jonas2.job
    }, and he has ${jonas2.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(jonas2.calcAge());
// console.log(jonas);

//Challenge
console.log(jonas2.getSummary());

//for loop
for (let rep = 1; rep <= 5; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️`);
}

const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  // 读取 ionasArray 中的元素
  console.log(jonasArray[i], typeof jonasArray[i]);

  // 填充 types 数组
  types.push(typeof jonasArray[i]);
}
console.log(types);

const years1 = [1991, 2007, 1969, 2020];
const age4 = [];
for (let i = 0; i < years1.length; i++) {
  age4.push(2037 - years1[i]);
}
console.log(age4);

//continue	跳过当前这一次循环，继续下一次	跳过不符合条件的数据处理
//break	完全终止整个循环	找到某个值后就立即停止搜索

// 倒序遍历 jonas 数组（从最后一个元素到第一个）
for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

// 模拟健身训练：做 3 组练习，每组做 5 次重复举重
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 3; rep++) {
    console.log(`Lifting weight repetition ${rep} 🏋️`);
  }
}

// 示例 1：重复执行举重练习（1到10）
let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️`);
  rep++;
}

// 示例 2：掷骰子，直到掷出 6 才停止
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
