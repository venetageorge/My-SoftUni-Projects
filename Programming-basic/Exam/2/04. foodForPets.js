function foodForPets(input) {
  let index = 0;
  let countDays = Number(input[index]);
  index++;
  let countFoodAll = Number(input[index]);
  index++;
  let totalDog = 0;
  let totalCat = 0;
  let total = 0;
  let biscuit = 0;

  for (let i = 1; i <= countDays; i++) {

    let sumDog = Number(input[index]);
    index++;
    totalDog += sumDog;

    let sumCat = Number(input[index]);
    index++;
    totalCat += sumCat;

    total += sumDog + sumCat;

    let thirdDay = sumDog + sumCat;

    if (i % 3 === 0) {
      biscuit += (thirdDay * 0.10);
    }
  }
  percentAll = total / countFoodAll * 100;
  percentDog = totalDog / total * 100;
  percentCat = totalCat / total * 100;
  console.log(`Total eaten biscuits: ${Math.round(biscuit.toFixed(2))}gr.`);
  console.log(`${percentAll.toFixed(2)}% of the food has been eaten.`);
  console.log(`${percentDog.toFixed(2)}% eaten from the dog.`);
  console.log(`${percentCat.toFixed(2)}% eaten from the cat.`);
}
foodForPets(["3", "1000", "300", "20", "100", "30", "110", "40"]);
