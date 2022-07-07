function meetings(input) {
    let myObj = {};

    for (let element of input) {
        let [day, name] = element.split(' ');
        if (!myObj.hasOwnProperty(day)) {
            myObj[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    for (let key in myObj) {
        let today = key;
        let person = myObj[key];
        console.log(`${today} -> ${person}`);
    }
}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);
// meetings(['Friday Bob',
// 'Saturday Ted',
// 'Monday Bill',
// 'Monday John',
// 'Wednesday George']);