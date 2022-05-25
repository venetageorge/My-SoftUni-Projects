function suppliesForSchool(input) {
  let penPack = Number(input[0]);
  let markerPack = Number(input[1]);
  let detergentInLiter = Number(input[2]);
  let discount = Number(input[3]) / 100;

  const penPrice = 5.8;
  const markerPrice = 7.2;
  const detergentPrice = 1.2;

  let penTotalPrice = penPrice * penPack;
  let markerTotalPrice = markerPrice * markerPack;
  let detergentTotalPrice = detergentPrice * detergentInLiter;
  let totalPrice = penTotalPrice + markerTotalPrice + detergentTotalPrice;
  let priceWithDiscount = totalPrice - totalPrice * discount;
  console.log(priceWithDiscount);
}
suppliesForSchool(["4 ", "2 ", "5 ", "13 "]);
