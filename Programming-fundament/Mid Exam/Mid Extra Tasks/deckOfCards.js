function deckOfCards(arr) {
    let cards = arr.shift().split(',');
    let num = arr.shift();
    num = Number(num);
    for (let i = 0; i < num; i++) {
        let sequence = arr[i].split(',');
        let command = sequence.shift();
        switch (command) {
            case "Add":
                for (let el of sequence) {
                    if (cards.includes(el)) {
                        console.log("Card is already in the deck");
                    } else {
                        cards.push(el);
                        console.log("Card successfully added");
                    }
                }
                break;
            case "Remove":
                for (let el of sequence) {
                    if (!cards.includes(el)) {
                        console.log("Card not found");
                    } else {
                        cards.splice(cards[el], 1);
                        console.log("Card successfully removed");
                    }
                }
                break;
            case "Remove At":
                let index = Number(sequence[0]);
                if ((index < 0 || index > cards.length)) {
                    console.log("Index out of range");
                } else {
                    cards.splice(index, 1);
                    console.log("Card successfully removed");
                }
                break;
            case "Insert":
                let indx = Number(sequence[0]);
                let element = sequence[1];
                if ((indx < 0 || indx > cards.length)) {
                    console.log("Index out of range");
                    if (cards.includes(element)) {
                        console.log("Card is already added");
                        break;
                    }
                }else{
                    cards.splice(indx, 0, element);
                    console.log("Card successfully added");
                }
                break;
        }
    }
    console.log(cards.join(',').trim());
}
deckOfCards(["Ace of Diamonds, Queen of Hearts, King of Clubs",
    "3",
    "Add, King of Diamonds",
    "Insert, 2, Jack of Spades",
    "Remove, Ace of Diamonds"]);
deckOfCards(["Two of Clubs, King of Spades, Five of Spades, Jack of Hearts",
"2",
"Add, Two of Clubs",
"Remove, Five of Hearts"]);
deckOfCards(["Jack of Spades, Ace of Clubs, Jack of Clubs",
"2",
"Insert, -1, Queen of Spades",
"Remove At, 1"]);