function worldSnookerChampionship(input) {
  const stage = input[0];
  const ticketType = input[1];
  const countTickets = Number(input[2]);
  let picture = input[3];
  let price = 0;
  let picturePrice = 40;

  switch (stage) {
    case "Quarter final":
      if (ticketType === "Standard") {
        price += countTickets * 55.5;
      } else if (ticketType === "Premium") {
        price += countTickets * 105.2;
      } else {
        price += countTickets * 118.9;
      }
      break;
    case "Semi final":
      if (ticketType === "Standard") {
        price += countTickets * 75.88;
      } else if (ticketType === "Premium") {
        price += countTickets * 125.22;
      } else {
        price += countTickets * 300.4;
      }
      break;
    case "Final":
      if (ticketType === "Standard") {
        price += countTickets * 110.1;
      } else if (ticketType === "Premium") {
        price += countTickets * 160.66;
      } else {
        price += countTickets * 400.0;
      }
      break;
  }
  if (price > 4000) {
    price -= 0.25 * price;
    if (picture === "Y") {
      price;
    } else {
      price;
    }
  } else if (price > 2500) {
    price -= 0.1 * price;
    if (picture === "Y") {
      price += countTickets * picturePrice;
    } else {
      price;
    }
  } else {
    if (picture === "Y") {
      price += countTickets * picturePrice;
    } else {
      price;
    }
  }

  console.log(price.toFixed(2));
}
worldSnookerChampionship(["Quarter final", "Standard", "11", "N"]);
