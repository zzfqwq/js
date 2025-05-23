const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John", "Leo"] },
  { weight: 18, curFood: 244, owners: ["Joe"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

const dogsWithRec = dogs.map((dog) => ({
  ...dog,
  recFood: Math.trunc(dog.weight ** 0.75 * 28),
}));

const sarahDog = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(
  `Sarah's dog is eating ${
    sarahDog.curFood > sarahDog.recFood ? "too much" : "too little"
  }`
);

const ownersEatTooMuch = [
  dogs.filter((dog) => dog.curFood > dog.recFood).flatMap((dog) => dog.owners),
];

const ownersEatTooLittle = [
  dogs.filter((dog) => dog.curFood < dog.recFood).flatMap((dog) => dog.owners),
];

console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

const anyDogEatingExact = dogs.some((dog) => dog.curFood === dog.recFood);
console.log(anyDogEatingExact);

const isEatingOkay = (dog) =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

const anyDogEatingOkay = dogs.some(isEatingOkay);
console.log(anyDogEatingOkay);

const dogsEatingokay = dogs.filter(isEatingOkay);
console.log(dogsEatingokay);

const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
