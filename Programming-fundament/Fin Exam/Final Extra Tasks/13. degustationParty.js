function degustationParty(input) {
    const guests = {};
    let dislikedMeals = 0;
  
    function like(obj, guest, meal) {
      if (!obj.hasOwnProperty(guest)) {
        obj[guest] = [];
      }
  
      if (obj[guest].includes(meal)) return;
  
      obj[guest].push(meal);
    }
  
    function dislike(obj, guest, meal) {
      if (!obj.hasOwnProperty(guest)) {
        console.log(`${guest} is not at the party.`);
        return;
      }
  
      if (!obj[guest].includes(meal)) {
        console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
        return;
      }
  
      const indexToRemove = obj[guest].indexOf(meal);
      obj[guest].splice(indexToRemove, 1);
      dislikedMeals++;
  
      console.log(`${guest} doesn't like the ${meal}.`);
    }
  
    for (const elem of input) {
      if (elem === 'Stop') break;
  
      const [command, guest, meal] = elem.split('-');
  
      switch (command) {
        case 'Like':
          like(guests, guest, meal);
          break;
        case 'Dislike':
          dislike(guests, guest, meal);
          break;
        default: 
          console.log('No such command!');
          continue;
      }
    }
  
    Object.entries(guests)
      .forEach(([guest, meals]) => {
        console.log(`${guest}: ${meals.join(', ')}`);
      }
    );
  
    console.log(`Unliked meals: ${dislikedMeals}`);
  }
  degustationParty([
    "Like-Krisi-shrimps",
    "Like-Krisi-soup",
    "Like-Penelope-dessert",
    "Like-Misho-salad",
    "Stop"
  ]);
  degustationParty([
    "Like-Krisi-shrimps",
    "Dislike-Vili-carp",
    "Dislike-Krisi-salad",
    "Stop"
  ]);
  