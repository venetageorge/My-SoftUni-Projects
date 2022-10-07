function solve(area, vol, input) {
    const result = JSON.parse(input).map((obj) => ({
        area: area.call(obj),
        volume: vol.call(obj),
    }));

    return result;
}