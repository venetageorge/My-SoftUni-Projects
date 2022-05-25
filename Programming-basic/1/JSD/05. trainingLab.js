function trainingLab(input) {
    let w = Number(input[0]) * 100; 
    let h = Number(input[1]) * 100; 

    let hWithoutCorr = h - 100; 
    let deskInHight = Math.trunc (hWithoutCorr / 70);
    let deskInWidth = Math.trunc (w / 120);
    let desks = (deskInHight * deskInWidth) - 3; 
    console.log(desks);
}
trainingLab(["15", "8.9"]); 