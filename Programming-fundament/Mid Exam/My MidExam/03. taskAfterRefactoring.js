function deckOfCards(arr) {
    let listOfCards = arr.shift().split(", ");
    let commands = Number(arr.shift());
   
    for (let commands of arr) {
      let [command, ...cards] = commands.split(", ");
   
      switch (command) {
        case "Add":
          for (let card of cards) {
            if (!listOfCards.includes(card)) {
              listOfCards.push(card);
              console.log("Card successfully added");
            } else {
              console.log("Card is already in the deck");
            }
          }
          break;
   
        case "Remove":
          let cardName = cards[0];
          if (listOfCards.includes(cardName)) {
            let cardIndx = listOfCards.indexOf(cardName);
            listOfCards.splice(cardIndx, 1);
            console.log("Card successfully removed");
          } else {
            console.log("Card not found");
          }
          break;
   
        case "Remove At":
          let indx = Number(cards[0]);
          if (indx < 0 || indx > listOfCards.length) {
            console.log("Index out of range");
          } else {
            listOfCards.splice(indx, 1);
            console.log("Card successfully removed");
          }
          break;
   
        case "Insert":
          let listIndx = Number(cards[0]);
          let nameOfCard = cards[1];
          if (listIndx < 0 || listIndx > listOfCards.length) {
            console.log("Index out of range");
          } else if (listIndx >= 0 && listIndx <= listOfCards.length) {
            if (listOfCards.includes(nameOfCard)) {
              console.log("Card is already added");
            } else {
              listOfCards.splice(listIndx, 0, nameOfCard);
              console.log("Card successfully added");
            }
          }
      }
    }
    console.log(listOfCards.join(", "));
  }
deckOfCards(["Ace of Diamonds, Queen of Hearts, King of Clubs",
    "3",
    "Add, King of Diamonds",
    "Insert, 2, Jack of Spades",
    "Remove, Ace of Diamonds"]);
// deckOfCards(["Two of Clubs, King of Spades, Five of Spades, Jack of Hearts",
// "2",
// "Add, Two of Clubs",
// "Remove, Five of Hearts"]);
// deckOfCards(["Jack of Spades, Ace of Clubs, Jack of Clubs",
// "2",
// "Insert, -1, Queen of Spades",
// "Remove At, 1"]);