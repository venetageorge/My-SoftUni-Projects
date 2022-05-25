function careOfPuppy(input) {
  let foodKg = Number(input[0]);
  let index = 1;
  food = input[index];
  let eatenFood = 0;
  let foodInGrams = 0;

  foodInGrams += foodKg * 1000;
  while (food !== "Adopted") {
    if (food === "Adopted") {
      break;
    }

    eatenFood += Number(food);
    index++;
    food = input[index];
  }
  if (foodInGrams >= eatenFood) {
    let diff = foodInGrams - eatenFood;
    console.log(`Food is enough! Leftovers: ${diff} grams.`);
  } else {
    let diff = eatenFood - foodInGrams;
    console.log(`Food is not enough. You need ${diff} grams more.`);
  }
}
careOfPuppy(["2", "999", "456", "999", "999", "123", "456", "Adopted"]);
