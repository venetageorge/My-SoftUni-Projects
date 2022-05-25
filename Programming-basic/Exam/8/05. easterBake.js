function easterBake(input) {
  const countEasterBread = Number(input[0]);
  let index = 1;
  let onePackageSugarGramm = 950;
  let onePackageFlourGramm = 750;
  let sugarCounter = 0;
  let flourCounter = 0;
  let maxSugar = Number.MIN_SAFE_INTEGER;
  let maxFlour = Number.MIN_SAFE_INTEGER;

  for (let i = 1; i <= countEasterBread; i++) {
    let usedSugar = Number(input[index]);
    sugarCounter += usedSugar;
    index++;

    if (maxSugar < usedSugar) {
      maxSugar = usedSugar;
    }

    let usedFlour = Number(input[index]);
    flourCounter += usedFlour;
    index++;

    if (maxFlour < usedFlour) {
      maxFlour = usedFlour;
    }
  }
  let totalSugar = Math.ceil(sugarCounter / onePackageSugarGramm);
  let totalFlour = Math.ceil(flourCounter / onePackageFlourGramm);

  console.log(`Sugar: ${totalSugar}`);
  console.log(`Flour: ${totalFlour}`);
  console.log(
    `Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`
  );
}
easterBake(["4", "500", "350", "560", "430", "600", "345", "578", "543"]);
