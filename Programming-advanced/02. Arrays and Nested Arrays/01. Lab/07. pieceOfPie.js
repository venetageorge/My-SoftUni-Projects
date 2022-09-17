function pieceOfPie(pieFlavorsArr, start, end) {
    let startIndex = pieFlavorsArr.indexOf(start);
    let endIndex = pieFlavorsArr.indexOf(end);

    let res = (pieFlavorsArr.slice(startIndex, endIndex + 1))
    return res
}
console.log(pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'));

console.log(pieceOfPie(['Apple Crisp',
 'Mississippi Mud Pie',
 'Pot Pie',
 'Steak and Cheese Pie',
 'Butter Chicken Pie',
 'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'));