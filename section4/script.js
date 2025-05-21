"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const italianFoods = new Set([
  "pasta",
  "gnocchi",
  "tomatoes",
  "olive oil",
  "garlic",
  "basil",
]);

const mexicanFoods = new Set([
  "tortillas",
  "beans",
  "rice",
  "tomatoes",
  "avocado",
  "garlic",
]);

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//Destructuring
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); //sat 被单独提取出来 变成了一个变量 ...weekdays 捕获了剩下的属性（不包括 sat）结果是一个对象

const add = function (...numbers) {
  console.log(numbers);
  //[2,3] [5,3,7,2] [8,2,5,3,2,1,4]

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum); // 5 17 23
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x); //35

//短路行为 ||会从左到右寻找第一个“真值”(truthy) 如果找到了，就立即返回，不再看后面的 如果全是假值(falsy)，返回最后一个。
console.log(3 || "Jonas"); // 输出：3
console.log("" || "Jonas"); // 输出：'Jonas'
console.log(true || 0); // 输出：true
console.log(undefined || null); // 输出：null
console.log(undefined || 0 || "" || "Hello" || 23 || null); // 输出：'Hello'

console.log("---- AND ----");

console.log(0 && "Jonas"); // 输出: 0
console.log(7 && "Jonas"); // 输出: 'Jonas'
console.log("Hello" && 23 && null && "jonas"); // 输出: null

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}
console.log(
  restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach")
);

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); // 输出：10

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); // 输出：0 ✅

const rest1 = {
  name: "Capri",
  numGuests: 20,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

// 使用 || 赋默认值
rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;

console.log(rest1);
console.log(rest2);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(item);
}

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

//SET
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

console.log(ordersSet); // Set(3) { 'Pasta', 'Pizza', 'Risotto' }
console.log(new Set("Jonas")); // Set(5) { 'J', 'o', 'n', 'a', 's' }

console.log(ordersSet.size); // 3
console.log(ordersSet.has("Pizza")); // true
console.log(ordersSet.has("Bread")); // false

ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread"); // 不会重复添加
ordersSet.delete("Risotto");

console.log(ordersSet); // Set(3 or 4), 'Risotto' 被删除

for (const order of ordersSet) console.log(order);
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique); // ['Waiter', 'Chef', 'Manager']
console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
); // 输出：3
console.log(new Set("jonasschmedtmann").size); // 输出：11（不重复字母个数）

const rest = new Map();

rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
//不写成console.log((time > rest.get('open') && time < rest.get('close')))是因为要到前面get出false的值"We are closed :(" 不然就只能输出布尔值

console.log(rest.has("categories"));
rest.delete(2);
console.log(rest);
console.log(rest.size);
// rest.clear();

const arr = [1, 2];
rest.set(arr, "Test");

console.log(rest); // 输出整个 Map
console.log(rest.size); // 查看 Map 大小
console.log(rest.get(arr)); // 用原始的 arr 变量取值

const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again!"],
]);

console.log(question);

// Convert object to map
console.log(Object.entries(restaurant.openingHours));
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

// Print only number-type answers
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

const answer = 3;
console.log(answer);

console.log(question.get(question.get("correct") === answer));

// Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

//string methods
const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);

console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("portugal")); //找不到返回 -1（大小写不匹配）

console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle seat 😬");
  else console.log("You got lucky 😎");
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(airline.toLowerCase()); // 全部转小写
console.log(airline.toUpperCase()); // 全部转大写

// Fix capitalization in name
const passenger = "jOnAS"; // 错误的写法
const passengerLower = passenger.toLowerCase(); // jonas
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1); // Jonas

console.log(passengerCorrect);

const email = "hello@jonas.io";
const loginEmail = "   Hello@Jonas.Io \n";

// 传统写法：先小写，再去空格
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

// 一步完成的写法：
const normalizedEmail = loginEmail.toLowerCase().trim();

console.log(normalizedEmail);
console.log(email === normalizedEmail);

const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";

console.log(announcement.replace("door", "gate"));

console.log("a+very+nice+string".split("+"));
console.log("Jonas Schmedtmann".split(" "));

const [firstName, lastName] = "Jonas Schmedtmann".split(" ");

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }

  console.log(namesUpper.join(" "));
};

capitalizeName("jessica ann smith davis");
capitalizeName("jonas schmedtmann");

const message = "Go to gate 23!";
console.log(message.padStart(20, "+").padEnd(30, "+"));
console.log("Jonas".padStart(20, "+").padEnd(30, "+"));

const maskCreditCard = function (number) {
  const str = number + ""; // 转为字符串
  const last = str.slice(-4); // 获取最后四位
  return last.padStart(str.length, "*"); // 前面用 * 填充到原始长度
};
maskCreditCard(64637836); // ****7836
maskCreditCard(4337846386464784); // ************4784
maskCreditCard("334859493847755774747"); // *******************4747
const message2 = "Bad weather... All Departures Delayed...";
console.log(message2.repeat(5));

const flights1 =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25\n" +
  "+_Arrival;bru0943384722;fao93766109;11:45\n" +
  "+_Delayed_Arrival;hel7439299980;fao93766109;12:05\n" +
  "+_Departure;fao93766109;lis2323639855;12:30";

for (const flight of flights1.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const getCode = (str) => str.slice(0, 3).toUpperCase();
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(":", "h")}}`;

  console.log(output);
}
