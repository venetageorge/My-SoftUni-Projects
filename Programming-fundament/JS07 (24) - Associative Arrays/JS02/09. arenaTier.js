function arenaTier(data) {
  let gladiatorPlool = {};

  for (let line of data) {
    if (line === 'Ave Cesar') {
      break;
    }
    let tokens = line.split(' -> ');
    if (tokens.length > 1) {
      let name = tokens[0];
      let technique = tokens[1];
      let skill = Number(tokens[2]);
        if (!gladiatorPlool.hasOwnProperty(name)) {
          gladiatorPlool[name] = {};
        }
        if (!gladiatorPlool[name].hasOwnProperty(technique)) {
          gladiatorPlool[name][technique] = 0;
        }
        let oldSkill = gladiatorPlool[name][technique];
        if (oldSkill < skill) {
          gladiatorPlool[name][technique] = skill;
        }
    } else {
      tokens = tokens[0].split(" vs ");
      let gladiatorA = tokens[0];
      let gladiatorB = tokens[1];

      if (!gladiatorPlool.hasOwnProperty(gladiatorA) || !gladiatorPlool.hasOwnProperty(gladiatorB)) {
        continue;
      } 
      let sumGladiatorOne = 0;
      let sumGladiatorTwo = 0;
      for (let [technique, skill] of Object.entries(gladiatorPlool[gladiatorA])) {
        if (gladiatorPlool[gladiatorB].hasOwnProperty(technique)) {
          sumGladiatorOne += gladiatorPlool[gladiatorA][technique];
          sumGladiatorTwo += gladiatorPlool[gladiatorB][technique];
        }
      }
      if (sumGladiatorOne > sumGladiatorTwo) {
        delete gladiatorPlool[gladiatorB];
      } else if (sumGladiatorOne < sumGladiatorTwo) {
        delete gladiatorPlool[gladiatorA];
      }
    }
  }

  let gladiatorTotalSkill = {};
  for (let [galdiatorName, techniquePool] of Object.entries(gladiatorPlool)) {
      if (!gladiatorTotalSkill.hasOwnProperty(galdiatorName)) {
        gladiatorTotalSkill[galdiatorName] = 0;
      }
      let sum = 0;
      for (let currentSkill of Object.values(techniquePool)) {
        sum += currentSkill;
      }
      gladiatorTotalSkill[galdiatorName] = sum;
  }

  let sortGladiatorByName = Object.entries(gladiatorTotalSkill).sort(([keyA, valueA], [keyB, valueB]) => {
    return valueB - valueA || keyA.localeCompare(keyB);
  });

  for (let [name, points] of sortGladiatorByName) {
    console.log(`${name}: ${points} skill`);

    let sortItems = Object.entries(gladiatorPlool[name]).sort(([keyA, valueA], [keyB, valueB]) => {
      return valueB - valueA || keyA.localeCompare(keyB);
    });

    for (let [techniqueName, techniqueSkill] of sortItems) {
      console.log(`- ${techniqueName} <!> ${techniqueSkill}`);
    }
  }
}
arenaTier([
  'Peter -> BattleCry -> 400',
  'Alex -> PowerPunch -> 300',
  'Stefan -> Duck -> 200',
  'Stefan -> Tiger -> 250',
  'Ave Cesar'
]);
arenaTier([
  'Peter -> Duck -> 400',
  'Julius -> Shield -> 150',
  'Gladius -> Heal -> 200',
  'Gladius -> Support -> 250',
  'Gladius -> Shield -> 250',
  'Peter vs Gladius',
  'Gladius vs Julius',
  'Gladius vs Maximilian',
  'Ave Cesar'
]);