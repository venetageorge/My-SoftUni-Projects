function fishland(input) {
    let priceForKgSkumriq = Number(input[0]); 
    let priceForKgCaca = Number(input[1]);
    let kgPalamud = Number(input[2]); 
    let kgSafrid = Number(input[3]);
    let kgShell = Number(input[4]);

    let palamud = priceForKgSkumriq + priceForKgSkumriq * (60 / 100);
    let palamudPrice = kgPalamud * palamud; 
    let safrid = priceForKgCaca + priceForKgCaca * (80 / 100);
    let safridPrice = kgSafrid * safrid;
    let shell = 7.50 * kgShell;
    let total = palamudPrice + safridPrice + shell;
    console.log(total.toFixed(2)); 
}
fishland(["5.55", "3.57", "4.3", "3.6", "7"]); 