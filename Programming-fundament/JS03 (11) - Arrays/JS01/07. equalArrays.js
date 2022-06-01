function equalArrays(arr1, arr2) {
    let sum = 0;
    let isEqual = true; 

    for (let i = 0; i < arr1.length; i++) {
        sum += Number(arr1[i]);
        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isEqual = false;
            break;
        }
    }
    if (isEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);        
    }
}
equalArrays(['10','20','30'], ['10','20','30']);
// equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);
// equalArrays(['1'], ['10']);


// function equalArrays(arr1, arr2) {
//     let isEqual = true; 
    
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//             console.log(`Arrays are not identical. Found difference at ${i} index`);
//             isEqual = false;
//             break;
//         }
//     }
//     let sum = 0;
//     if (isEqual) {
//         for (let unparsed of arr1) {
//             sum += Number(unparsed);
//         }
//         console.log(`Arrays are identical. Sum: ${sum}`);        
//     }
// }
