function palindromeIntegers(arr) {

    for (let element of arr) {
        let currentElement = String(element);
        let reversed = String(element).split('').reverse().join('');

        if (currentElement === reversed) {
            console.log(true)
        } else {
            console.log(false)
        }
    }
}
palindromeIntegers([123,323,421,121]);
palindromeIntegers([32,2,232,1010]);