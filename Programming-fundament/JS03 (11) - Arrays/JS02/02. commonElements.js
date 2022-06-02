function commonElements(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        let first = arr1[i];

        for (let element of arr2) {
            let second = element;

            if (first === second) {
                console.log(`${first}`)
            }
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);