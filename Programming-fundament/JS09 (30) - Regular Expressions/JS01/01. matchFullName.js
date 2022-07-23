function matchFullName(names) {
    let pattern = /\b[A-Z]{1}[a-z]{1,} [A-Z]{1}[a-z]{1,}/g;
    let match = pattern.exec(names);
    let res = [];

    while (match !== null) {
        res.push(match[0]);
        match = pattern.exec(names);
    }
    console.log(res.join(' '));
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");