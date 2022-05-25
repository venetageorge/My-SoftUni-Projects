function bitcoinMining(input) {
    let index = 0;
    let oneBitcoin = 11949.16;
    let goldOneGramm = 67.51;
    let gold = 0;
    let totalGold = 0;
    let bitCoinFirstDay = 0; 
    let bitCoinCounter = 0; 
    let firstDay = 0;
    
    for (let i = 1; i <= input.length; i++) {
        if (i % 3 == 0) {
            gold += Number(input[index]);
            gold -= 0.3 * gold;
        } else {
            gold += Number(input[index]);
        }
        totalGold += goldOneGramm * gold;

        if (totalGold >= oneBitcoin) {
            for (let k = oneBitcoin; k <= totalGold; k++) {
                totalGold -= oneBitcoin;
                bitCoinFirstDay = i;
                bitCoinCounter++;
                if (bitCoinCounter === 1) {
                    firstDay += bitCoinFirstDay;
                } 
            }
        }
        gold = 0;
        index++;
    }
    console.log(`Bought bitcoins: ${bitCoinCounter}`);
    if (bitCoinCounter !== 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${totalGold.toFixed(2)} lv.`);
}
bitcoinMining([100, 200, 300]);
// bitcoinMining([50, 100]);
// bitcoinMining([3124.15, 504.212, 2511.124]);