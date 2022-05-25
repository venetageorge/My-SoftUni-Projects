function cinema(input) {
  let capacityOfHall = Number(input[0]);
  let index = 1;
  let command = input[index];
  let ticketPrice = 5;
  let price = 0;
  let counter = 0;

  while (command !== "Movie time!") {
    command = input[index];
    
    if (command === "Movie time!") {
      break;
    }

    counter = command;
    if (capacityOfHall < counter) {
      break;
    } else {
      price += command * ticketPrice;
      capacityOfHall -= counter;
    }
    
    
    if (command % 3 === 0) {
      price -= 5;
    } 
    index++;
    
  }
  if (command === "Movie time!") {
    console.log(`There are ${capacityOfHall} seats left in the cinema.`);
  } else if (capacityOfHall < counter) {
    console.log(`The cinema is full.`);
  }
  console.log(`Cinema income - ${price} lv.`);
}
cinema(["100", "15", "15", "15", "15", "15", "15", "15"]);