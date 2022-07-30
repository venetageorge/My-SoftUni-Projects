function adAstra(input) {
    let reggex = /([#|\|])([A-Za-z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d+)\1/gm;
    let kcalNeeded = 2000;
    let kcalTotal = 0;
    let element = input[0];
    let match = reggex.exec(element);
    let res = [];

    while (match !== null) {
        let name = match[2];
        let date = match[3];
        let calories = Number(match[4]);

        kcalTotal += calories;
        res.push(`Item: ${name}, Best before: ${date}, Nutrition: ${calories}`);
        match = reggex.exec(element);
    }
    let totalDays = Math.floor(kcalTotal / kcalNeeded);
    console.log(`You have food to last you for: ${totalDays} days!`);

    for (let line of res) {
        console.log(line);
    }
}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]);
adAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ]);
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@' ]);