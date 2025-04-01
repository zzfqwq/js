const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

// console.log(mark.calcBMI());
// console.log(john.calcBMI());

mark.calcBMI();
john.calcBMI();

console.log(mark.BMI, john.BMI);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.BMI.toFixed(1)}) is higher than ${
      john.fullName
    }'s (${john.BMI.toFixed(1)})!`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.BMI.toFixed(1)}) is higher than ${
      mark.fullName
    }'s (${mark.BMI.toFixed(1)})!`
  );
} else {
  console.log(
    `${mark.fullName} and ${
      john.fullName
    } have the same BMI (${mark.BMI.toFixed(1)})!`
  );
}
