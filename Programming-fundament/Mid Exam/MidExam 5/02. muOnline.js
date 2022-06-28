function muOnline(arr) {
    let health = 100;
    let bitcoins = 0;
    let isDead = false;
    let counter = 0;
    let bestRoom;
    let rooms = arr.split('|');
    let length = rooms.length; 

    for (let i = 0; i <= length - 1; i++) {
        let basis = rooms.shift().split(' ');
        counter++;
    
    let enemy = basis.shift();
    let num = Number(basis.shift());

        if (enemy === 'potion') {
            let commonBlood = num + health;

            if (commonBlood > 100) {
                num = 100 - health;
                health = 100;
            } else {
                health += num;
            }
            console.log(`You healed for ${num} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (enemy === 'chest') {
            bitcoins += num;
            console.log(`You found ${num} bitcoins.`);
        } else {
            health -= num;
            if (health > 0) {
                console.log(`You slayed ${enemy}.`);
            } else {
                isDead = true;
                bestRoom = counter;
                console.log(`You died! Killed by ${enemy}.`);
                break;
            }
        }
}
    if (isDead) {
        console.log(`Best room: ${bestRoom}`);
    } else {
    console.log(`You've made it!\nBitcoins: ${bitcoins}\nHealth: ${health}`);
    }
}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
// muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");