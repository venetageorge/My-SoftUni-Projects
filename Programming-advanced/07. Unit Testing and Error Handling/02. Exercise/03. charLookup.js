describe ("Test lookupUp char with incorrect type", () => {
    it ("result shoud be undefine with first parameter is incorrect", () => {
        assert.equal(lookupChar(5,5), undefined);
    });
    it ("result shoud be undefine with second parameter is incorrect", () => {
        assert.equal(lookupChar("Pesho", "Gosho"), undefined);
    });

    it ("result shoud be undefine with second parameter is decimal number", () => {
        assert.equal(lookupChar("Pesho", 0.99), undefined);
    });

    it ("result shoud be undefine with forst parameter is array", () => {
        assert.equal(lookupChar([], 0), undefined);
    });
});

describe ("Test lookupUp char with correct type but the value of the index is incorrect", () => {
    it ("result shoud be Incorrect index with bigger index", () => {
        assert.equal(lookupChar("Todor", 100), "Incorrect index");
    });

    it ("result shoud be Incorrect index with equal index", () => {
        assert.equal(lookupChar("Todor", "5"), "Incorrect index");
    });

    it ("result shoud be Incorrect index with negative index", () => {
        assert.equal(lookupChar("Todor", -1), "Incorrect index");
    });
});

describe ("Test lookupUp with correct type and value", () => {
    it ("result shoud be T with zero index (Todor)", () => {
        assert.equal(lookupChar("Todor", 0), "T");
    });

    it ("result shoud be r with last index (Todor)", () => {
        assert.equal(lookupChar("Todor", 4), "r");
    });
});