function argInfo(...params) {
    let res = {};

    for (let el of params) {
        let type = typeof(el) 
        console.log(`${type}: ${el}`);

        if (res.hasOwnProperty(type)) {
            res[type] = 0;
        }
        res[type] = res[type] + 1;
    }

    let buff = '';
    for (let [key, value] of Object.entries(res)) {
        buff += `${key} = ${value}\n`;

    }
}