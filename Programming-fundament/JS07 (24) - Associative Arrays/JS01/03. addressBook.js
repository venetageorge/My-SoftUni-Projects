function addressBook(input) {
    let myObj = {};

    for (let element of input) {
        let [name, address] = element.split(':');
        myObj[name] = address;
    }
    let sorted = Object.keys(myObj);
    sorted.sort((a, b) => a.localeCompare(b));

    for (let key of sorted) {
        let person = key;
        let personAddress = myObj[key];
        console.log(`${person} -> ${personAddress}`);
    }
}
addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);
addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']);