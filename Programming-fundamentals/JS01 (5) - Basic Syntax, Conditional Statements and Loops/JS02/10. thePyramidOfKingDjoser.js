function thePyramidOfKingDjoser(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let height = 1;
    
    for (let i = base; i >= 1; i -= 2) {
        if (i > 2) {
          if (height % 5 === 0) {
            lapisLazuli += (i * 4 - 4) * increment;
          } else {
            marble += (i * 4 - 4) * increment;
          }
          height++;
          stone += Math.pow(i - 2, 2) * increment;
        } else {
          gold += Math.pow(i, 2) * increment;
        }
      }
    height *= increment
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}
thePyramidOfKingDjoser(11, 1);
// thePyramidOfKingDjoser(11, 0.75);
// thePyramidOfKingDjoser(12, 1);
// thePyramidOfKingDjoser(23, 0.5);