bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tips = [];
totals = [];
for (let i = 0; i < bills.length; i++) {
  if (bills >= 50 && bills <= 300) {
    tips.push(bills[i] * 0.15);
    totals.push(bills[i] * 1.15);
  } else if (50 < bills < 300) {
    tips.push(bills[i] * 0.2);
    totals.push(bills[i] * 1.2);
  }
}

console.log("账单列表：", bills);
console.log("小费列表：", tips);
console.log("总额列表：", totals);

// 计算平均值的函数
const calcAverage = function (arr) {
  let sum = 0;

  // 遍历数组，将所有值加总
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  // 计算平均值 = 总和 / 元素个数
  return sum / arr.length;
};

// 假设你之前已经算好了 totals 数组
const totals = [26.4, 339.25, 202.4, 528, 42.55, 120.75, 12, 1320, 103.2, 62.4];

// 调用函数并打印平均值
console.log("平均总额为：", calcAverage(totals));
