function specialNumbers(num) {
    let res = "";
    isSpec = false; 
    let result = 0;
    
    for (let i = 1; i <= num; i++) {
        res = Number(i);
        
        if (res <= 9) {
            if (res % 5 === 0 || res % 7 === 0) {
                isSpec = true;
                console.log(`${i} -> True`);
            } else {
                console.log(`${i} -> False`);
            }
        } else {
            let firstChar = parseInt(res / 10); 
            let secondChar = parseInt(res % 10);
            result = firstChar + secondChar;

            if (result === 5 || result === 7 || result === 11) {
                isSpec = true;
                console.log(`${i} -> True`);
            } else {
                console.log(`${i} -> False`);
            }
            result = 0;
        }
    }
}
// specialNumbers(15);
specialNumbers(20);