function piccolo(input) {
    let parking = new Set();
    
    for (let element of input) {
        let [command, num] = element.split(', ');

        if (command == 'IN') {
            parking.add(num);
        } else {
            parking.delete(num);
        }
    }

    if (parking.size == 0) {
        console.log(`Parking Lot is Empty`);
    } else {
    let result = Array.from(parking).sort();
    for (let car of result) {
        console.log(car);
    }
}
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);
// piccolo(['IN, CA2844AA',
// 'IN, CA1234TA',
// 'OUT, CA2844AA',
// 'OUT, CA1234TA']);