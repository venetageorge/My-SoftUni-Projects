function cookingByNumbers(startPoint, ...params) {
    startPoint = Number(startPoint);

    for (let element of [...params]) {
        let commonElement = element;

        if (commonElement === 'chop') {
            startPoint /= 2;
            console.log(startPoint);
        } else if (commonElement === 'dice') {
            startPoint = Math.sqrt(startPoint);
            console.log(startPoint);
        } else if (commonElement === 'spice') {
            startPoint += 1;
            console.log(startPoint);
        } else if (commonElement === 'bake') {
            startPoint *= 3;
            console.log(startPoint);
        } else if (commonElement === 'fillet') {
            startPoint -= 0.2 * startPoint;
            console.log(startPoint);
        }
    }
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
