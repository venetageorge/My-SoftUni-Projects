function poolDay(input) {
  let countOfPeople = Number(input[0]);
  let entryTax = Number(input[1]);
  let chairTax = Number(input[2]);
  let umbrellaTax = Number(input[3]);
  let peopleWithChair = 0.75;

  let entryTotal = countOfPeople * entryTax;

  let peopleChairTotal = Math.ceil(peopleWithChair * countOfPeople);
  let chairTotal = peopleChairTotal * chairTax;

  let umbrellaPeople = Math.ceil(0.5 * countOfPeople);
  let umbrellaTotal = umbrellaPeople * umbrellaTax;

  let totalSum = entryTotal + chairTotal + umbrellaTotal;
  console.log(`${totalSum.toFixed(2)} lv.`);
}
poolDay(["50", "6", "8", "4"]);