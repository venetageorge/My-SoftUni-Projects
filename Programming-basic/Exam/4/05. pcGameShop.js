function pcGameShop(input) {
  const sumGames = Number(input[0]);
  let index = 1;
  let name = input[index];
  let hearthstoneCounter = 0;
  let forniteCounter = 0;
  let overwatchCounter = 0;
  let otherCounter = 0;

  for (let i = 0; i < sumGames; i++) {
    name = input[index];

    switch (name) {
      case "Hearthstone":
        hearthstoneCounter++;
        break;
      case "Fornite":
        forniteCounter++;
        break;
      case "Overwatch":
        overwatchCounter++;
        break;
      default:
        otherCounter++;
        break;
    }
    index++;
  }

  let percentHearthstone = hearthstoneCounter * (100 / sumGames);
  let percentFornite = forniteCounter * (100 / sumGames);
  let percentOverwatch = overwatchCounter * (100 / sumGames);
  let percentOthers = otherCounter * (100 / sumGames);
  console.log(`Hearthstone - ${percentHearthstone.toFixed(2)}%`);
  console.log(`Fornite - ${percentFornite.toFixed(2)}%`);
  console.log(`Overwatch - ${percentOverwatch.toFixed(2)}%`);
  console.log(`Others - ${percentOthers.toFixed(2)}%`);
}
pcGameShop(["4", "Hearthstone", "Fornite", "Overwatch", "Counter-Strike"]);
