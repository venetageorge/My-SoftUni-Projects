function clock() {
    for (let i = 0; i < 24; i++) {
        for (let m = 0; m < 60; m++) {
            for (let s = 0; s < 60; s++) {
              console.log(`${i} : ${m} : ${s}`);
          }
        }
    }
}
clock([]);