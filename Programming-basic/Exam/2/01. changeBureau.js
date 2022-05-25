function changeBureau(input) {
  let bitcoinCount = Number(input[0]);
  let chinaUanCount = Number(input[1]);
  let comission = Number(input[2]);

  let oneBitcoinPrice = 1168;
  let dollarPrice = 1.76;
  let chinaUanPrice = 0.15;
  let euroPrice = 1.95;

  let bitcoinTotal = bitcoinCount * oneBitcoinPrice;
  let chinaUanTotal = chinaUanCount * chinaUanPrice * dollarPrice;
  let total = bitcoinTotal + chinaUanTotal;

  let totalEuro = total / euroPrice;
  comissionTotal = (comission / 100) * totalEuro;
  let totalAfterCommision = totalEuro - comissionTotal;
  console.log(totalAfterCommision.toFixed(2));
}
changeBureau(["20", "5678", "2.4"]);