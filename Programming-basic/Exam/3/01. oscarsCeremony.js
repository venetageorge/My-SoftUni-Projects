function oscarsCeremony(input) {
    let rent = Number(input[0]);

    let figures = rent - 0.3 * rent;
    let catering = figures - 0.15 * figures;
    let sound = catering / 2;
    
    let total = rent + figures + catering + sound;
    console.log(total.toFixed(2));
}
oscarsCeremony(["5555"])