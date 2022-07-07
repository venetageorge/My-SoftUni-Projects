function phoneBook(arr) {
    let myObj = {};

    for (let key of arr) {
        let [name, phone] = key.split(' ');
        myObj[name] = phone;
    }
    
    for (let element in myObj) {
        let person = element; 
        let value = myObj[element];
       console.log(`${person} -> ${value}`);
    }
}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);
// phoneBook(['George 0552554',
// 'Peter 087587',
// 'George 0453112',
// 'Bill 0845344']);