function fruitMarket(arg1,arg2,arg3,arg4,arg5) {
    let priceStrawberry = Number(arg1);
    let countBanana = Number(arg2);
    let countOrange = Number(arg3);
    let countRaspberry = Number(arg4);
    let countStrawberry = Number(arg5);

    let strawberryTotal = countStrawberry * priceStrawberry;
    let raspberryPrice = priceStrawberry / 2;
    let raspberryTotal = countRaspberry * raspberryPrice;
    let orangePrice = raspberryPrice - 0.4 * raspberryPrice;
    let orangeTotal = countOrange * orangePrice;
    let bananaPrice = raspberryPrice - 0.8 * raspberryPrice
    let bananaTotal = countBanana * bananaPrice;

    let total = strawberryTotal + raspberryTotal + orangeTotal + bananaTotal;
    console.log(total.toFixed(2));
}
fruitMarket(48, 10, 3.3, 6.5, 1.7);