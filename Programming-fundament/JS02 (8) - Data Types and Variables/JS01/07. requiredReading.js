function requiredReading(numPages, pagesPerHour, days) {
    let totalTimeForReading = numPages / pagesPerHour;
    let total = totalTimeForReading / days;
    console.log(total);
}
requiredReading(212, 20, 2);
requiredReading(432, 15, 4);