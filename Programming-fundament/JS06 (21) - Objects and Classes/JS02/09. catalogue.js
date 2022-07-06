function catalogue(arr) {
    let myObj = {};

    for (let i = 0; i < arr.length; i++) {
        let [name, price] = arr[i].split(' : ');
        myObj[name] = price;
    }
    let sorted = Object
    .keys(myObj)
    .sort((a, b) => a.localeCompare(b));

    let product = '';

    for (let key of sorted) {
        if(!key.startsWith(product[0])) {
            console.log(key[0]);
        }
        product = key;
        console.log(`  ${key}: ${myObj[key]}`);
    } 
}
catalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);
// catalogue(['Omlet : 5.4',
//     'Shirt : 15',
//     'Cake : 59']);