function filmPremiere(input) {
  const projection = input[0];
  const packageForTheFilm = input[1];
  const countTickets = Number(input[2]);
  let price = 0;

  switch (projection) {
    case "John Wick":
      if (packageForTheFilm === "Drink") {
        price += 12 * countTickets;
      } else if (packageForTheFilm === "Popcorn") {
        price += 15 * countTickets;
      } else if (packageForTheFilm === "Menu") {
        price += 19 * countTickets;
      }
      break;
    case "Star Wars":
      if (packageForTheFilm === "Drink") {
        price += 18 * countTickets;
      } else if (packageForTheFilm === "Popcorn") {
        price += 25 * countTickets;
      } else if (packageForTheFilm === "Menu") {
        price += 30 * countTickets;
      }
      break;
    case "Jumanji":
      if (packageForTheFilm === "Drink") {
        price += 9 * countTickets;
      } else if (packageForTheFilm === "Popcorn") {
        price += 11 * countTickets;
      } else if (packageForTheFilm === "Menu") {
        price += 14 * countTickets;
      }
      break;
  }
  if (projection === "Star Wars" && countTickets >= 4) {
    price -= 0.3 * price;
  } else if (projection === "Jumanji" && countTickets === 2) {
    price -= 0.15 * price;
  }
  console.log(`Your bill is ${price.toFixed(2)} leva.`);
}
filmPremiere(["Jumanji", "Menu", "2"]);
