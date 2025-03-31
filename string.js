const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}`;
console.log(jonasNew);

//falsy: '' undefined NaN null 0
//===是严格运算 ==是松散运算
const age = "18";

if (age === 18) console.log("You just became an adult :D (strict)");

if (age == 18) console.log("You just became an adult :D (loose)");
//=== 严格相等：不会进行类型转换，只有值和类型相同才返回 true。
//== 宽松相等：会进行类型转换，在这种情况下，'18' 被转换为数字 18，所以返回 true
