function basketballEquipment(input) {
  const anualTax = Number(input[0]);

  let sneakersPrice = anualTax - 0.4 * anualTax;
  let outfitPrice = sneakersPrice - 0.2 * sneakersPrice;
  let ballPrice = outfitPrice / 4;
  let accessoriesPrice = ballPrice / 5;

  let total =
    anualTax + sneakersPrice + outfitPrice + ballPrice + accessoriesPrice;
  console.log(total.toFixed(2));
}
basketballEquipment(["230"]);
