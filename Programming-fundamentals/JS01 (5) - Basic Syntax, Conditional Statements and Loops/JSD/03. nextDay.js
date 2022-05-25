function nextDay(year, month, day) {

    if (year < 10) {
        year = Number(`190${year}`);
    } else if (year < 100) {
        year = Number(`19${year}`);
    } else {
        year = year; 
    }

    let tomorrow = day + 1; 
    let newMonth = month; 
    let newYear = year; 

    if (month = 2 && tomorrow > 28) {
        if (year % 4 === 0 && tomorrow > 29){
            newMonth += 1;
            tomorrow = 1;
        } else if (year % 4 !== 0){
            newMonth += 1;
            tomorrow = 1
        }
    }

    if (tomorrow > 31 && (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12)) {
        tomorrow = 1; 
        if (month == 12) {
            newMonth = 1;
            newYear += 1; 
        }
        newMonth += 1; 
    } else if (tomorrow > 30 && (month === 4 || month === 6 || month === 9 || month === 11)) {
        tomorrow = 1;
        newMonth += 1; 
    } else {
        tomorrow = tomorrow;
    }
    console.log(`${newYear}-${newMonth}-${tomorrow}`);
}
nextDay(2016, 9, 30);
nextDay(2020, 3, 24);
nextDay(2014, 2, 28);
nextDay(2012, 2, 29);
nextDay(2011, 2, 28);
nextDay(2016, 2, 28);
nextDay(1, 1, 1);
nextDay(99, 1, 1);