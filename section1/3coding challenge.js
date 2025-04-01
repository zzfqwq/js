//TEST DATA 1
averageDol = (96 + 108 + 89) / 3;
averageKoal = (88 + 91 + 110) / 3;
if (averageDol >= 100 && averageDol > averageKoal) {
  console.log("Dol is win");
} else if (averageKoal >= 100 && averageKoal > averageDol) {
  console.log("Koal is win");
} else if (
  avgDolphins === avgKoalas &&
  avgDolphins >= 100 &&
  avgKoalas >= 100
) {
  console.log("It is a draw! Both win the trophy! 🤝");
} else {
  console.log("No team wins the trophy 😢");
}
