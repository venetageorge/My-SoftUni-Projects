function storeCatalogue(input) {
    let res = {};

    for (let el of input) {
        let [product, price] = el.split(' : ');
        let letter = product[0];

        if (!res[letter]) {
            res[letter] = [{ product, price: Number(price) }];
        } else {
            res[letter].push({ product, price: Number(price) });
        }

    }
    let newRes = Object.entries(res).sort((a, b) =>
        a[0].localeCompare(b[0]));

    for (let [add, obj] of newRes) {
        let sorted = Object.values(obj).sort((a, b) =>
            a.product.localeCompare(b.product)
        );

        console.log(add);
        sorted.forEach(obj =>
            console.log(`  ${obj.product}: ${obj.price}`)
        );
    }
}
storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);
storeCatalogue(['Banana : 2',
    'Rubics Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']);