function centuriesToMinutes(num) {
    let oneYear = 365.2422;
    let oneHour = 60;
    let centuries = num * 100;
    let day = Math.trunc(centuries * oneYear);
    let hour = day * 24;
    let min = hour * oneHour;
    console.log(`${num} centuries = ${centuries} years = ${day} days = ${hour} hours = ${min} minutes`);
}
centuriesToMinutes(1);
centuriesToMinutes(5);