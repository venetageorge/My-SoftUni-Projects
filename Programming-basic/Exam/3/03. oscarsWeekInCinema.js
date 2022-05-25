function oscarsWeekInCinema(input) {
  let name = input[0];
  let typeHall = input[1];
  let countTickets = Number(input[2]);
  let price = 0;

  switch (typeHall) {
    case "normal":
      if (name === "A Star Is Born") {
        price = countTickets * 7.5;
        console.log(`${name} -> ${price.toFixed(2)} lv.`);
      } else if (name === "Bohemian Rhapsody") {
        price = countTickets * 7.35;
        console.log(`${name} -> ${price.toFixed(2)} lv.`);
      } else if (name === "Green Book") {
        price = countTickets * 8.15;
        console.log(`${name} -> ${price.toFixed(2)} lv.`);
      } else if (name === "The Favourite") {
        price = countTickets * 8.75;
        console.log(`${name} -> ${price.toFixed(2)} lv.`);
      }
      break;
    case "luxury":
      if (name === "A Star Is Born") {
        price = countTickets * 10.5;
        console.log(`${name} -> ${price.toFixed(2)} lv.`);
      } else if (name === "Bohemian Rhapsody") {
        price = countTickets * 9.45;
        console.log(`${name} -> ${price.toFixed(2)} lv.`);
      } else if (name === "Green Book") {
        price = countTickets * 10.25;
        console.log(`${name} -> ${price.toFixed(2)} lv.`);
      } else if (name === "The Favourite") {
        price = countTickets * 11.55;
        console.log(`${name} -> ${price.toFixed(2)} lv.`);
      }
      break;
    case "ultra luxury":
      if (name === "A Star Is Born") {
        price = countTickets * 13.5;
        console.log(`${name} -> ${price.toFixed(2)} lv.`);
      } else if (name === "Bohemian Rhapsody") {
        price = countTickets * 12.75;
        console.log(`${name} -> ${price.toFixed(2)} lv.`);
      } else if (name === "Green Book") {
        price = countTickets * 13.25;
        console.log(`${name} -> ${price.toFixed(2)} lv.`);
      } else if (name === "The Favourite") {
        price = countTickets * 13.95;
        console.log(`${name} -> ${price.toFixed(2)} lv.`);
      }
      break;
  }
}
oscarsWeekInCinema(["Green Book", "normal", "63"]);
