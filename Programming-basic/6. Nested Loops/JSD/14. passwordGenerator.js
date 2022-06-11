// function passwordGenerator(input) {
//     let n = Number(input[0]);
//     let l = Number(input[1]);
//     let res = "";

//     for (let symbol1 = 1; symbol1 <= n; symbol1++) {
//         for (let symbol2 = 1; symbol2 <= n; symbol2++) {
//             for (let symbol3 = 1; symbol3 <= l; symbol3++) {
//                 for (let symbol4 = 1; symbol4 <= l; symbol4++) {
//                     for (let symbol5 = 1; symbol5 <= n; symbol5++) {
//                         if (symbol5 >= (symbol1 + symbol2)) {
//                         res += `${symbol1}${symbol2}${symbol3}${symbol4}${symbol5} `;
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     console.log(res);
// }
// passwordGenerator(["3", "1"]);