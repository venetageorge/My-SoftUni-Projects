function starEnigma(arr) {
    let obj = { destroyedPlanets: [], attackedPlanets: [] };
    let decryptionKeyPattern = /[star]/gi;
    let secondPattern =
      /@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<type>[AD])![^@\-!:>]*->(?<soldiers>\d+)/;
    let n = arr.shift();
   
    for (let i = 0; i < n; i++) {
      
      let currentKey =
        arr[i].match(decryptionKeyPattern) &&
        arr[i].match(decryptionKeyPattern).length;
      let index = 0;
      let currentSequence = arr[i].split("");
      for (let el of currentSequence) {
        let currentCharAscii = el.charCodeAt();
        let newAscii = currentCharAscii - currentKey;
        currentSequence[index] = String.fromCharCode(newAscii);
        index++;
      }
      currentSequence = currentSequence.join("");
      let validInput = secondPattern.exec(currentSequence);
   
      if (validInput) {
        let name = validInput.groups.name;
        let type = validInput.groups.type;
        if (type === "A") {
          obj["attackedPlanets"].push(name);
        } else if (type === "D") {
          obj["destroyedPlanets"].push(name);
        }
      }
    }
   
    let sortedAttacked = Object.values(obj["attackedPlanets"]).sort((a, b) =>
      a.localeCompare(b)
    );
    console.log(`Attacked planets: ${sortedAttacked.length}`);
    sortedAttacked.forEach((x) => console.log(`-> ${x}`));
    let sortedDestroyed = Object.values(obj["destroyedPlanets"]).sort((a, b) =>
      a.localeCompare(b)
    );
    console.log(`Destroyed planets: ${sortedDestroyed.length}`);
    sortedDestroyed.forEach((x) => console.log(`-> ${x}`));
  }
starEnigma(['2',
'STCDoghudd4=63333$D$0A53333',
'EHfsytsnhf?8555&I&2C9555SR']);
// starEnigma(['3',
// "tt(''DGsvywgerx>6444444444%H%1B9444",
// 'GQhrr|A977777(H(TTTT',
// 'EHfsytsnhf?8555&I&2C9555SR']);