function companyUsers(input) {
    let myObj = new Map();

    for (let element of input) {
        let [name, num] = element.split(' -> ');

        if (!myObj.has(name)) {
            myObj.set(name, num);
        } else {
           let toBeAdded = myObj.get(name, num);

           if (toBeAdded !== num) {
           let newOne = `${toBeAdded}\n-- ${num}`;
           myObj.set(name, newOne);
           } 
        }
    }
    let sorted = Array.from(myObj).sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB));

    for (let [key, value] of sorted) {
        console.log(key);
        console.log(`-- ${value}`);
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]);
// companyUsers([
//     'SoftUni -> AA12345',
//     'SoftUni -> CC12344',
//     'Lenovo -> XX23456',
//     'SoftUni -> AA12345',
//     'Movement -> DD11111'
//     ]);