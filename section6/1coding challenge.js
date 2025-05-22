const checkDogs = function (dogsJulia, dogsKate) {
  // 1. 复制并修正 Julia 的数据
  const dogsJuliaCorrected = dogsJulia.slice(1, -2); // 去掉第一个和最后两个元素

  // 2. 合并数据
  const dogs = dogsJuliaCorrected.concat(dogsKate);

  // 3. 遍历并输出
  dogs.forEach(function (age, i) {
    if (age >= 3) {
      console.log(
        `Dog number ${i + 1} is an adult, and is ${age} years old 🐶`
      );
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐕`);
    }
  });
};

// 4. 使用测试数据
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
console.log("----------------------");
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
