function degustationParty(input) {
  let myObj = {};
  let counterUnlike = 0;

  while (input[0] !== 'Stop') {

    let basis = input.shift().split('-');
    let command = basis[0];
    let name = basis[1];
    let meal = basis[2];

    switch (command) {

      case 'Like':
        if (!myObj.hasOwnProperty(name)) {
          myObj[name] = {};
            myObj[name]['meal'] = meal;
        } else if (myObj[name]['meal'] == meal) {
          break;
        } else if (myObj[name]['meal'] !== meal) {
          myObj[name]['meal'] += `, ${meal}`;
        }

        if (myObj[name].hasOwnProperty(meal)) {
          break;
        } 
      break;
      case 'Dislike':
        if (!myObj.hasOwnProperty(name)) {
          console.log(`${name} is not at the party.`);
        } else if (myObj[name]['meal'] == meal) {
          counterUnlike++;
          delete myObj[name]['meal'];
          console.log(`${name} doesn't like the ${meal}.`);
        } else if (!myObj[name] !== meal) {
          console.log(`${name} doesn't have the ${meal} in his/her collection.`);
        }
      break;
    }
  }

  for (let key in myObj) {

    if (myObj[key]['meal'] !== undefined) {
    console.log(`${key}: ${myObj[key]['meal']}`);
    } else {
      console.log(`${key}: `);
    }
  }
  console.log(`Unliked meals: ${counterUnlike}`);
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
  degustationParty([
    "Like-Katy-fish",
    "Dislike-Katy-fish",
    "Stop"
  ]);