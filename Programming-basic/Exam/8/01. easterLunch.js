function easterLunch(input) {
  const countEasterBread = Number(input[0]);
  const eggsCount = Number(input[1]);
  const kgCookies = Number(input[2]);
  const easterBreadPrice = 3.2;
  const eggsPrice = 4.35;
  const cookiesPrice = 5.4;
  const colourForEggsPrice = 0.15;

  let easterBread = countEasterBread * easterBreadPrice;
  let eggs = eggsCount * eggsPrice;
  let cookies = kgCookies * cookiesPrice;
  let colourEggs = eggsCount * 12 * colourForEggsPrice;
  let total = easterBread + eggs + cookies + colourEggs;
  console.log(total.toFixed(2));
}
easterLunch(["2", "3", "2"]);
