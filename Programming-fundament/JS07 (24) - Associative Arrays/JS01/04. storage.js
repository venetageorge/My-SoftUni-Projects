function storage(input) {
    let myShop = new Map();

    for (let element of input) {
        let token = element.split(' ');
        let product = token[0];
        let sum = Number(token[1]);
        
        if (!myShop.has(product)) {
            myShop.set(product, sum);
        } else {
            let added = myShop.get(product, sum);
            sum += added;
            myShop.set(product, sum);
        }
    }
    for (let key of myShop) {
        let first = key[0];
        let total = key[1];
        console.log(`${first} -> ${total}`);
    }
}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);
storage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']);