function employees(arr) {
    let listObject = {};

    for (let person of arr) {
        listObject.employeeName = person;
        listObject.personalNum = person.length; 
    console.log(`Name: ${listObject.employeeName} -- Personal Number: ${listObject.personalNum}`);
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]);