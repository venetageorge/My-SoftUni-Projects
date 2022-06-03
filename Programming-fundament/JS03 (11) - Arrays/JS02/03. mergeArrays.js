function mergeArrays(arr1, arr2) {
    let newArr = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            let num1 = Number(arr1[i]);
            let num2 = Number(arr2[j]);
            if (i % 2 === 0 || j % 2 === 0) {
                newArr.push(num1 + num2);
            } else {
            newArr.push(`${arr1[i]}${arr2[j]}`);
        }
        i++;
    }
    }
    console.log(newArr.join(' - '))
}
mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);