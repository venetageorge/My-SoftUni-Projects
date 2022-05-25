function movieProfit(input) {
  const filmName = input[0];
  const countDays = Number(input[1]);
  const countTickets = Number(input[2]);
  const ticketPrice = Number(input[3]);
  const percentCinema = Number(input[4]);

  let ticketPricePerDay = countTickets * ticketPrice;
  let ticketPriceAll = ticketPricePerDay * countDays;
  let winCinema = (percentCinema * ticketPriceAll) / 100;
  let total = ticketPriceAll - winCinema;

  console.log(
    `The profit from the movie ${filmName} is ${total.toFixed(2)} lv.`
  );
}
movieProfit(["The Jungle", "22", "20500", "9.37", "30"]);
