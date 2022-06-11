function matchTickets(input) {
    let budget = Number(input[0]);
    const category = input[1];
    const countOfPeople = Number(input[2]);
    const vipTicket = 499.99;
    const normalTicket = 249.99;
    let ticketPrice = 0;

    if (countOfPeople >= 1 && countOfPeople <= 4) {
        budget *= 0.25;
    } else if (countOfPeople >= 5 && countOfPeople <= 9) {
        budget *= 0.4;
    } else if (countOfPeople >= 10 && countOfPeople <= 24) {
        budget *= 0.5; 
    } else if(countOfPeople >= 25 && countOfPeople <= 49) {
        budget *= 0.6;
    } else {
        budget *= 0.75;
    }
    
    if (category === "Normal") {
        let ticketPrice = normalTicket * countOfPeople;

        if (budget >= ticketPrice) {
            let difference = budget - ticketPrice;
            console.log(`Yes! You have ${difference.toFixed(2)} leva left.`);
        } else if (ticketPrice >budget) {
            let difference = ticketPrice - budget;
            console.log(`Not enough money! You need ${difference} leva.`);
        }
    } else if (category === "VIP") {
        let ticketPrice = vipTicket * countOfPeople;
        
        if (budget >= ticketPrice) {
            let difference = budget - ticketPrice;
            console.log(`Yes! You have ${difference.toFixed(2)} leva left.`);
        } else if (ticketPrice >budget) {
            let difference = ticketPrice - budget;
            console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`);
        }
    }
}
matchTickets(["1000", "Normal", "1"])