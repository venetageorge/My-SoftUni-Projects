function basketballEquipment(input) {
    let annualTax = Number(input[0]);

    const sneakers = annualTax - ((40 / 100) * annualTax);
    const outfit = sneakers - ((20 / 100) * sneakers);
    const ball = outfit / 4; 
    const accessories = ball / 5; 

    let total = annualTax + sneakers + outfit + ball + accessories;
    console.log(total);
}
basketballEquipment(["550"]); 