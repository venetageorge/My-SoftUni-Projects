function monthlyReport(input) {
    let myObj = {};
    let distributorObj = {};
    let clientObj = {};
    let sum = 0;

    while (input[0] !== 'End') {
        let basis = input.shift().split(' ');
        let command = basis[0];
        let name = basis[1];
        let money = Number(basis[2]);

        if (command == 'End') {
            break;
        }

        switch (command) {

            case 'Deliver':
                if (!myObj.hasOwnProperty(name)) {
                    myObj[name] = {};
                    myObj[name]['money'] = money;
                    if (!distributorObj.hasOwnProperty(name)) {
                        distributorObj[name] = {};
                        distributorObj[name]['money'] = money;
                    }
                } else {
                    myObj[name]['money'] += money;
                    distributorObj[name]['money'] += money;
                }
                break;


            case 'Return':
                if (myObj.hasOwnProperty(name)) {
                    if (distributorObj[name]['money'] < money) {
                        break;
                    } else {
                        myObj[name]['money'] -= money;
                        distributorObj[name]['money'] -= money;
                        if (myObj[name]['money'] <= 0) {
                            delete myObj[name];
                        }
                        if (distributorObj[name]['money'] <= 0) {
                            delete distributorObj[name];
                        }
                    }
                }

                break;

            case 'Sell':
                if (!clientObj.hasOwnProperty(name)) {
                    clientObj[name] = {};
                    clientObj[name]['money'] = money;
                    sum += money;

                } else {
                    clientObj[name]['money'] += money;
                    sum += money;

                }

                break;
        }
    }
    if (Object.entries(clientObj).length > 0) {
        for (let key in clientObj) {
            console.log(`${key}: ${(clientObj[key]['money']).toFixed(2)}`);
        }
    }
    console.log(`-----------`);

    if (Object.entries(distributorObj).length > 0) {
        for (let element in distributorObj) {
            console.log(`${element}: ${(distributorObj[element]['money']).toFixed(2)}`);
        }
    }
    console.log(`-----------`);

    console.log(`Total Income: ${sum.toFixed(2)}`);
}
monthlyReport(["Deliver Micro 10000.00",
"Sell Nick 500.00",
"Sell Antony 260.50",
"Deliver Micro 2000.50",
"End"]);
monthlyReport(["Deliver North 200.30",
"Sell Peter 30.20",
"Return Macro 5000.00",
"Return North 100.30",
"Sell Peter 50.50",
"End"]);
monthlyReport(["Deliver North 200.30",
"Deliver Micro 10000.00",
"Deliver North 150.50",
"End"]);
