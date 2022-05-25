function vacationBooksList(input) {
  const totalPages = Number(input[0]);
  const pagesPerHour = Number(input[1]);
  const numOfDay = Number(input[2]);

  const totalHpursNeeded = totalPages / pagesPerHour;
  const hoursPerDay = totalHpursNeeded / numOfDay;
  console.log(hoursPerDay);
}
vacationBooksList(["212 ", "20 ", "2 "]);
