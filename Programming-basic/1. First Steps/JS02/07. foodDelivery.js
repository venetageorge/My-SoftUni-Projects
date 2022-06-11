function foodDelivery(input) {
  let chickenMenuCount = Number(input[0]);
  let fishMenuCount = Number(input[1]);
  let veggiMenuCount = Number(input[2]);

  const chickenMenuPrice = 10.35;
  const fishMenuPrice = 12.4;
  const veggiMenuPrice = 8.15;

  let chickenMenu = chickenMenuCount * chickenMenuPrice;
  let fishMenu = fishMenuCount * fishMenuPrice;
  let veggiMenu = veggiMenuCount * veggiMenuPrice;
  let menuPrice = chickenMenu + fishMenu + veggiMenu;
  let dessert = (20 / 100) * menuPrice;
  let totalPrice = menuPrice + dessert + 2.5;
  console.log(totalPrice);
}
foodDelivery(["9 ", "2 ", "6 "]);