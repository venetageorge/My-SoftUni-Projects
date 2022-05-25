function agencyProfit(input) {
    let nameAvio = input[0];
    let countTicketAdults = Number(input[1]);
    let countChildrenTicket = Number(input[2]);
    let netoPriceAdultT = Number(input[3]);
    let tax = Number(input[4]);

    let netoPriceChild = netoPriceAdultT - 0.7 * netoPriceAdultT;
    let totalTaxAdult = netoPriceAdultT + tax;
    let totalTaxChild = netoPriceChild + tax;
    let total = totalTaxAdult * countTicketAdults + totalTaxChild * countChildrenTicket;
    let win = 0.2 * total;

    console.log(`The profit of your agency from ${nameAvio} tickets is ${win.toFixed(2)} lv.`);
}
agencyProfit(["WizzAir", "15", "5", "120", "40"]);