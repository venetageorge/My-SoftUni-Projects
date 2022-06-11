function smallShop(input) {
    const typeOfProduct = input[0];
    const cityName = input[1];
    const count = Number(input[2]);

    switch(cityName) {
        case "Sofia": 
        switch(typeOfProduct) {
            case "coffee": price = count * 0.5; break; 
            case "water": price = count * 0.8; break; 
            case "beer": price = count * 1.2; break; 
            case "sweets": price = count * 1.45; break; 
            case "peanuts": price = count * 1.6; break; 
        }
        case "Plovdiv":
        switch(typeOfProduct) {
            case "coffee": price = count * 0.4; break; 
            case "water": price = count * 0.7; break; 
            case "beer": price = count * 1.15; break; 
            case "sweets": price = count * 1.30; break; 
            case "peanuts": price = count * 1.50; break; 
        }
        case "Varna":
        switch(typeOfProduct) {
            case "coffee": price = count * 0.45; break; 
            case "water": price = count * 0.7; break; 
            case "beer": price = count * 1.1; break; 
            case "sweets": price = count * 1.35; break; 
            case "peanuts": price = count * 1.55; break; 
        } break;
    }
    console.log(price);
  }
  smallShop(["water", "Plovdiv", "3"]);