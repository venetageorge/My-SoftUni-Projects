function fruit(type, gramm, price) {
    let kg = gramm / 1000;
    let total = price * kg;
    console.log(`I need $${total.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${type}.`);
}
fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);