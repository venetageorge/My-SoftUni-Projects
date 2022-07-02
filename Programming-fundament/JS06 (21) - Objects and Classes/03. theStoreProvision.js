function storeProvision(currentStore, forDelivery) {
    let store = {};
    let storeLength = currentStore.length;
    let deliveryLength = forDelivery.length; 

    for (let i = 0; i < storeLength; i += 2) {
        let product = currentStore[i];
        store[product] = Number(currentStore[i + 1]);
    }
    for (let j = 0; j < deliveryLength; j += 2) {
        let product = forDelivery[j];

        if (!store.hasOwnProperty(product)) {
        store[product] = 0;
        }
        store[product] += Number(forDelivery[j + 1]);
    }
    for (const product in store) {
    console.log(`${product} -> ${store[product]}`);
    }
}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], 
['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
storeProvision(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'], 
['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);