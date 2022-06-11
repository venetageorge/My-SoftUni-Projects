function oldBooks(input) {
  const searchedBook = input[0];

  let index = 1;
  let bookIsFound = false;
  let otherBooks = input[index];
  
  while (otherBooks !== "No More Books") {
    if (otherBooks === searchedBook) {
      bookIsFound = true;
      break;
    }
    index++;
    otherBooks = input[index];
  }
  if (bookIsFound) {
    console.log(`You checked ${index - 1} books and found it.`);
  } else {
    console.log(
      `The book you search is not here!\nYou checked ${index - 1} books.`
    );
  }
}
oldBooks([
  "Bourne",
  "True Story",
  "Forever",
  "More Space",
  "The Girl",
  "Spaceship",
  "Strongest",
  "Profit",
  "Tripple",
  "Stella",
  "The Matrix",
  "Bourne",
]);