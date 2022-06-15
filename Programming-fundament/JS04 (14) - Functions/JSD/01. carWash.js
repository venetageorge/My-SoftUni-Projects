function carWash(arr) {
    let percentage = 0;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "soap") {
            percentage = 10;
            sum += percentage;
        } else if (arr[i] === "water") {
            percentage = 0.2 * sum;
            sum += percentage;
        } else if (arr[i] === "vacuum cleaner") {
            percentage = 0.25 * sum;
            sum += percentage;
        } else {
            percentage = 0.1 * sum;
            sum -= percentage;
        }

    }
    console.log(`The car is ${sum.toFixed(2)}% clean.`);
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);