function schoolCamp(input) {
    const season = input[0];
    const typeOfTheGroup = input[1];
    const countOfTheStudent = Number(input[2]);
    const countOfTheNights = Number(input[3]);
    const boysGirlsPriceWinter = 9.60;
    const boysGirlsPriceSpring = 7.20;
    const boysGirlsPriceSummer = 15;
    const mixedGroupWinter = 10;
    const mixedGroupSpring = 9.50;
    const mixedGroupSummer = 20;
    let price = 0;

    switch(season) {
        case ("Winter"):
        if (typeOfTheGroup === "girls") {
            price = countOfTheStudent * countOfTheNights * boysGirlsPriceWinter;
            if (countOfTheStudent >= 50) {
                price -= (0.5 * price);
                console.log(`Gymnastics ${price.toFixed(2)} lv.`);
            } else if (countOfTheStudent >= 20 && countOfTheStudent < 50) {
                price -= (0.15 * price);
                console.log(`Gymnastics ${price.toFixed(2)} lv.`);
            } else if (countOfTheStudent >= 10 && countOfTheStudent < 20) {
                price -= (0.05 * price);
                console.log(`Gymnastics ${price.toFixed(2)} lv.`);
            } else {
                console.log(`Gymnastics ${price.toFixed(2)} lv.`);
            }
        } else if (typeOfTheGroup === "boys") {
            price = countOfTheStudent * countOfTheNights * boysGirlsPriceWinter;
            if (countOfTheStudent >= 50) {
                price -= (0.5 * price);
                console.log(`Judo ${price.toFixed(2)} lv.`);
            } else if (countOfTheStudent >= 20 && countOfTheStudent < 50) {
                price -= (0.15 * price);
                console.log(`Judo ${price.toFixed(2)} lv.`);
            } else if (countOfTheStudent >= 10 && countOfTheStudent < 20) {
                price -= (0.05 * price);
                console.log(`Judo ${price.toFixed(2)} lv.`);
            } else {
                console.log(`Judo ${price.toFixed(2)} lv.`);
            }
        } else if (typeOfTheGroup === "mixed") {
            price = countOfTheStudent * countOfTheNights * mixedGroupWinter;
            if (countOfTheStudent >= 50) {
                price -= (0.5 * price);
                console.log(`Ski ${price.toFixed(2)} lv.`);
            } else if (countOfTheStudent >= 20 && countOfTheStudent < 50) {
                price -= (0.15 * price);
                console.log(`Ski ${price.toFixed(2)} lv.`);
            } else if (countOfTheStudent >= 10 && countOfTheStudent < 20) {
                price -= (0.05 * price);
                console.log(`Ski ${price.toFixed(2)} lv.`);
            } else {
                console.log(`Ski ${price.toFixed(2)} lv.`);
            }
        }
            break;
            case ("Spring"):
            if (typeOfTheGroup === "girls") {
                price = countOfTheStudent * countOfTheNights * boysGirlsPriceSpring;
                if (countOfTheStudent >= 50) {
                    price -= (0.5 * price);
                    console.log(`Athletics ${price.toFixed(2)} lv.`);
                } else if (countOfTheStudent >= 20 && countOfTheStudent < 50) {
                    price -= (0.15 * price);
                    console.log(`Athletics ${price.toFixed(2)} lv.`);
                } else if (countOfTheStudent >= 10 && countOfTheStudent < 20) {
                    price -= (0.05 * price);
                    console.log(`Athletics ${price.toFixed(2)} lv.`);
                } else {
                    console.log(`Athletics ${price.toFixed(2)} lv.`);
                }
            } else if (typeOfTheGroup === "boys") {
                price = countOfTheStudent * countOfTheNights * boysGirlsPriceSpring;
                if (countOfTheStudent >= 50) {
                    price -= (0.5 * price);
                    console.log(`Tennis ${price.toFixed(2)} lv.`);
                } else if (countOfTheStudent >= 20 && countOfTheStudent < 50) {
                    price -= (0.15 * price);
                    console.log(`Tennis ${price.toFixed(2)} lv.`);
                } else if (countOfTheStudent >= 10 && countOfTheStudent < 20) {
                    price -= (0.05 * price);
                    console.log(`Tennis ${price.toFixed(2)} lv.`);
                } else {
                    console.log(`Tennis ${price.toFixed(2)} lv.`);
                }
            } else if (typeOfTheGroup === "mixed") {
                price = countOfTheStudent * countOfTheNights * mixedGroupSpring;
                if (countOfTheStudent >= 50) {
                    price -= (0.5 * price);
                    console.log(`Cycling ${price.toFixed(2)} lv.`);
                } else if (countOfTheStudent >= 20 && countOfTheStudent < 50) {
                    price -= (0.15 * price);
                    console.log(`Cycling ${price.toFixed(2)} lv.`);
                } else if (countOfTheStudent >= 10 && countOfTheStudent < 20) {
                    price -= (0.05 * price);
                    console.log(`Cycling ${price.toFixed(2)} lv.`);
                } else {
                    console.log(`Cycling ${price.toFixed(2)} lv.`);
                }
            }
            break;
            case ("Summer"):
            if (typeOfTheGroup === "girls") {
            price = countOfTheStudent * countOfTheNights * boysGirlsPriceSummer;
                if (countOfTheStudent >= 50) {
                price -= (0.5 * price);
                console.log(`Volleyball ${price.toFixed(2)} lv.`);
                } else if (countOfTheStudent >= 20 && countOfTheStudent < 50) {
                price -= (0.15 * price);
                console.log(`Volleyball ${price.toFixed(2)} lv.`);
                } else if (countOfTheStudent >= 10 && countOfTheStudent < 20) {
                price -= (0.05 * price);
                console.log(`Volleyball ${price.toFixed(2)} lv.`);
                } else {
                    console.log(`Volleyball ${price.toFixed(2)} lv.`);
                }
            } else if (typeOfTheGroup === "boys") {
                price = countOfTheStudent * countOfTheNights * boysGirlsPriceSummer;
                if (countOfTheStudent >= 50) {
                    price -= (0.5 * price);
                    console.log(`Football ${price.toFixed(2)} lv.`);
                } else if (countOfTheStudent >= 20 && countOfTheStudent < 50) {
                    price -= (0.15 * price);
                    console.log(`Football ${price.toFixed(2)} lv.`);
                } else if (countOfTheStudent >= 10 && countOfTheStudent < 20) {
                    price -= (0.05 * price);
                    console.log(`Football ${price.toFixed(2)} lv.`);
                } else {
                    console.log(`Football ${price.toFixed(2)} lv.`);
                }
            } else if (typeOfTheGroup === "mixed") {
            price = countOfTheStudent * countOfTheNights * mixedGroupSummer;
            if (countOfTheStudent >= 50) {
                price -= (0.5 * price);
                console.log(`Swimming ${price.toFixed(2)} lv.`);
            } else if (countOfTheStudent >= 20 && countOfTheStudent < 50) {
                price -= (0.15 * price);
                console.log(`Swimming ${price.toFixed(2)} lv.`);
            } else if (countOfTheStudent >= 10 && countOfTheStudent < 20) {
                price -= (0.05 * price);
                console.log(`Swimming ${price.toFixed(2)} lv.`);
            } else {
                console.log(`Swimming ${price.toFixed(2)} lv.`);
            }
        }
        break;
    }
}
schoolCamp(["Spring", "girls", "20", "7"]);