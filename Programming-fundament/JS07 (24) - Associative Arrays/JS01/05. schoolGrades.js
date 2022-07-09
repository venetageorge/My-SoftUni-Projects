function schoolGrades(input) {
    let myObj = new Map();

    for (let element of input) {
        let basis = element.split(" ");

        let name = basis.shift();
        let setOfGrades = basis; 

        if (!myObj.has(name)) {
            myObj.set(name, setOfGrades);
        } else {
            let oldAvg = myObj.get(name);
            for (let grade of setOfGrades) {
                oldAvg.push(grade);
            }
            myObj.set(name, oldAvg);
        }
    }

    let sorted = Array.from(myObj.entries()).sort(([keyA], [keyB]) => {
        return keyA.localeCompare(keyB)
    });
    for (let [k, v] of sorted) {
        let sumGrade = 0;
        for (let grade of v) {
            sumGrade += Number(grade)
        }
        let avgg = sumGrade / v.length; 
        console.log(`${k}: ${avgg.toFixed(2)}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']);
schoolGrades(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']);