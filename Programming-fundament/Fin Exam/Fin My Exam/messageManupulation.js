function messageM(input) {
    let numOfMessages = Number(input.shift());
    let myObj = {};

    for (let i = 0; i < input.length; i++) {
        let token = input[i].split('=');
        let command = token[0];
        if (command == 'Statistics') {
            break;
        }
        let username = token[1];
        if (!myObj.hasOwnProperty(username)) {
        myObj[username] = {};
        myObj[username]['sent'];
        myObj[username]['received'];
        }

        switch (command) {
            case 'Add':
            let sent = Number(token[2]);
            let received = Number(token[3]);

            if (myObj.hasOwnProperty(username)) {
                myObj[username] = {
                    sent: sent,
                    received: received,
                };
            }
            break;

            case 'Message':
            let receiver = token[2];

            if (myObj.hasOwnProperty(username) && myObj.hasOwnProperty(receiver)) {
            myObj[username]['sent']++;
            myObj[token[2]]['received']++;
            
                if ((myObj[username]['sent'] + myObj[username]['received']) >= numOfMessages) {
                        delete myObj[username];
                        console.log(`${username} reached the capacity!`);
                }
                if (myObj[token[2]]['sent'] + myObj[token[2]]['received'] >= numOfMessages) {
                    delete myObj[token[2]];
                    console.log(`${token[2]} reached the capacity!`);
                } 
            }
                
            break;
            case 'Empty':

                if (username == 'All') {
                    myObj = {};
                } else if (myObj.hasOwnProperty(username)) {
                    delete myObj[username];
                } 
            break;
        }
    }
    let counter = Object.entries(myObj).length;


    console.log(`Users count: ${counter}`);
    for (let key in myObj) {
        console.log(`${key} - ${(myObj[key]['sent'] + myObj[key]['received'])}`);
    }
}
messageM(["10",
"Add=Berg=9=0",
"Add=Kevin=0=0",
"Message=Berg=Kevin",
"Add=Mark=5=4",
"Statistics"]);

messageM(["20",
"Add=Mark=3=9",
"Add=Berry=5=5",
"Add=Clark=4=0",
"Empty=Berry",
"Add=Blake=9=3",
"Add=Michael=3=9",
"Add=Amy=9=9",
"Message=Blake=Amy",
"Message=Michael=Amy",
"Statistics"]);

messageM(["12",
"Add=Bonnie=3=5",
"Add=Johny=4=4",
"Empty=All",
"Add=Bonnie=3=3",
"Statistics"]);