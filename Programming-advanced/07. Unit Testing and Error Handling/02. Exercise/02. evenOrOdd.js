describe("test isOddOrEven with incorrect value", () => {
    it("Result should be undefined with array argument", () => {
        assert.equal(isOddOrEven([]), undefined);
    });

    it("Result should be undefined with empty object argument", () => {
        assert.equal(isOddOrEven({}), undefined);
    });

    it("Result should be undefined with object argument", () => {
        assert.equal(isOddOrEven({ name: "Pesho" }), undefined);
    });

    it("Result should be undefined with number argument", () => {
        assert.equal(isOddOrEven(1), undefined);
    });

    it("Result should be undefined with boolean argument", () => {
        assert.equal(isOddOrEven(true), undefined);
    });
});


describe("test isOddOrEven with correct value", () => {
    it("Result should be even with `Love`", () => {
        assert.equal(isOddOrEven("love"), "even");
    });

    it("Result should be even with `Todor`", () => {
        assert.equal(isOddOrEven("Todor"), "odd");
    });
})