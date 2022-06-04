function maxNumber(arr) {
    let newArr = [];

    for (let index = 0; index < arr.length; index++) {
        let common = arr[index];
        let isTop = true;

        for (let j = index + 1; j < arr.length; j++) {
            let nextEl = arr[j];

            if (common <= nextEl) {
                isTop = false;
                break;
            }
        }

        if (isTop) {
            newArr.push(common);            
        }
    }
    console.log(newArr.join(" "));
}
maxNumber([1, 4, 3, 2]);
// maxNumber([14, 24, 3, 19, 15, 17]);
// maxNumber([41, 41, 34, 20]);
// maxNumber([27, 19, 42, 2, 13, 45, 48]);