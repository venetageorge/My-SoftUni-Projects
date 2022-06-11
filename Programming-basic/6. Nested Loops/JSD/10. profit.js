// function profit(input) {
//     let countCoins1Lv = Number(input[0]);
//     let countCoins2Lv = Number(input[1]);
//     let countMoney5Lv = Number(input[2]);
//     let sum = Number(input[3]);
//     let newSum = sum;
//     let one = 1;
//     let two = 2;
//     let five = 5;
//     let oneCounter = 0;
//     let twoCounter = 0;
//     let fiveCounter = 0;

//     for (let i = 1; i <= countCoins1Lv; i++) {
//         for (let j = 1; j <= countCoins2Lv; j++) {
//             for (let k = 1; k <= countMoney5Lv; k++) {
//                 if (k * five === newSum) {
//                     fiveCounter = k;
//                 } 
//             }
//         }
//     }
//     console.log(`${oneCounter} * 1 lv. + ${twoCounter} * 2 lv. + ${fiveCounter} * 5 lv. = ${sum} lv.`);
// }
// profit(["3", "2", "3", "10"]);