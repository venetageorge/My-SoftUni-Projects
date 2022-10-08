function solve(arr) {
    const result = {
        values: [],
        add(string) {
            this.values.push(string);
        },
        remove(string) {
            this.values = this.values.filter(el => el != string);
        },
        print() {
            console.log(this.values.join(','));
        },
    };
    arr.forEach(line => {
        const [command, value] = line.split(' ');
        result[command](value);
    });
}