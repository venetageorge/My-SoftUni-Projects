function grades(input) {
    let countStudents = Number(input[0]);
    let total = 0;
    twoSt = 0;
    threeSt = 0;
    fourSt = 0;
    fiveSt = 0;
    fail = 0;
    middle = 0;
    almost = 0;
    great = 0;

    for (let i = 1; i <= countStudents; i++) {
        let degree = Number(input[i]);

        if (degree >= 2.00 && degree <= 2.99) {
            twoSt += degree;
            fail++
        } else if (degree >= 3.00 && degree <= 3.99) {
            threeSt += degree;
            middle++
        } else if (degree >= 4.00 && degree <= 4.99) {
            fourSt += degree;
            almost++
        } else if (degree >= 5.00) {
            fiveSt += degree; 
            great++
        }
        total += degree / countStudents;
    }
    percentTwo = fail / countStudents * 100;
    percentThree = middle / countStudents * 100;
    percentFour = almost / countStudents * 100;
    percentFive = great / countStudents * 100;

    console.log(`Top students: ${percentFive.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${percentFour.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${percentThree.toFixed(2)}%`);
    console.log(`Fail: ${percentTwo.toFixed(2)}%`);
    console.log(`Average: ${total.toFixed(2)}`);
}
grades(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"]);