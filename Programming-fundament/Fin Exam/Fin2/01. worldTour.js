function worldTour(input) {
    let str = input.shift();
    let line = input.shift();

    while (line !== 'Travel') {
        let [command, firstParam, secondParam] = line.split(':');
        let starIndex;
        let endIndex;
        switch(command) {
            case 'Add Stop':
                let startIndex = Number(firstParam);
                if (startIndex < 0 || startIndex >= str.length) {
                    console.log(str);
                    break;
                }
                let value = secondParam;
                let firstPart = str.slice(0, startIndex);
                let secondPart = str.slice(startIndex);
                str = firstPart + value + secondPart;
                console.log(str);
                break;
        case 'Remove Stop':
            starIndex = Number(firstParam);
            endIndex = Number(secondParam);
            if (!str[starIndex] || !str[endIndex]) {
                console.log(str);
                break;
            }
            let subStr = str.substring(starIndex, endIndex + 1);
            str = str.replace(subStr, "");
            console.log(str);
            break;

        case 'Switch':
            let oldStr = firstParam;
            let newStr = secondParam;
            let pattern = new RegExp(oldStr, 'g');
            str = str.replace(pattern, newStr);
            console.log(str);
            break;

        } 
        line = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${str}`);
}
worldTour(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"]);