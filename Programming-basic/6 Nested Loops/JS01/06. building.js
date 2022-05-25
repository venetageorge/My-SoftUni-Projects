function building(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);

    for (let floors = x; floors > 0; floors--) {
        let res = "";
        for (let room = 0; room < y; room++) {
            if (floors === x) {
                res += `L${floors}${room} `;
            } else if (floors % 2 === 0) {
                res += `O${floors}${room} `;
            } else {
                res += `A${floors}${room} `;
            }
        }
        console.log(res)
    }
}
building(["6", "4"]);