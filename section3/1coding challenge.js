arr1 = [17, 21, 23];
arr2 = [12, 5, -5, 0, 4];
function printForecast(arr) {
  let str = "...";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}C in ${i + 1} days   ...`;
  }
  console.log(str);
}

printForecast(arr1);
printForecast(arr2);

// const printForecast = function (arr) {
//   let forecastStr = "...";

//   for (let i = 0; i < arr.length; i++) {
//     forecastStr += ` ${arr[i]}ºC in ${i + 1} days ...`;
//   }

//   console.log(forecastStr);
// };

// printForecast([17, 21, 23]);

// printForecast([12, 5, -5, 0, 4]);
