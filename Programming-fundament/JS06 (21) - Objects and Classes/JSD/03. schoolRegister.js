function schoolRegister(arr) {
        let newArr = [];
        for (let element of arr) {
            let [name, grade, score] = element.split(', ');
            let newObj = {};
            newObj.name = name.split('Student name: ')[1];
            newObj.grade = Number(grade.split('Grade: ')[1]);
            newObj.score = Number(score.split('Graduated with an average score: ')[1]);
            newArr.push(newObj);
        }
        newArr.sort((a, b) => {
            return a.grade - b.grade;
        }) 
        newArr = newArr.filter(objs => objs.score >= 3.00); 
        
        let anotherObj = {};
        newArr.forEach(objects => {
            let name = objects.name;
            let grade = objects.grade;
            let avgScore = objects.score;
            if (!anotherObj.hasOwnProperty(grade)) {
                anotherObj[grade] = {
                    name: [name],
                    avgScore: [avgScore],
                };
            } else {
                anotherObj[grade].name.push(name);
                anotherObj[grade].avgScore.push(avgScore);
            }
        })
     
        for (let grade in anotherObj) {
            let students = anotherObj[grade];
            let classAverage = 0;
            let counter = 0;
            console.log(`${Number(grade) + 1} Grade`);
            console.log(`List of students: ${students.name.join(", ")}`);
            for (let score of students.avgScore) {
                classAverage += Number(score);
                counter++;
            }
            classAverage = classAverage / counter;
            console.log(
                `Average annual score from last year: ${classAverage.toFixed(2)}`
            );
            console.log(" ");
        }
}
schoolRegister(["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"]);
// schoolRegister(['Student name: George, Grade: 5, Graduated with an average score: 2.75',
//     'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
//     'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
//     'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
//     'Student name: John, Grade: 9, Graduated with an average score: 2.90',
//     'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
//     'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15']);