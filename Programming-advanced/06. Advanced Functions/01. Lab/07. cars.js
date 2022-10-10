function cars(arr) {
    let obj = {}
    let instr = {
        create: (name1, inherit, name2) =>
            obj[name1] = inherit ? Object.create(obj[name2]) : {},
        set: (name, key, value) =>
            obj[name][key] = value,
        print: (name) => {
            let array = []
            for (let key in obj[name]) {
                array.push(`${key}:${obj[name][key]}`)
            }
            console.log(array.join(','))
        }
    }
    arr.forEach(el => {
        let [c, n, k, v] = el.split(' ')
        instr[c](n, k, v)
    })
}