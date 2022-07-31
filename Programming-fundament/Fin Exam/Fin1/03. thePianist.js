function thePianist(input) {
    let num = Number(input.shift());
    let myObj = {};

    for (let i = 0; i < num; i++) {
      let line = input.shift();
      let [name, composer, key] = line.split('|');
      myObj[name] = {};
      myObj[name]['composer'] = composer;
      myObj[name]['key'] = key;
    }
    let line = input.shift();

    while (line != 'Stop') {

      if (line.includes('Add')) {
        let [command, name, composer, key] = line.split('|');
        if (myObj.hasOwnProperty(name)) {
          console.log(`${name} is already in the collection!`);
        } else {
          console.log(`${name} by ${composer} in ${key} added to the collection!`);
          myObj[name] = {};
          myObj[name]['composer'] = composer;
          myObj[name]['key'] = key;
        }
      } else if (line.includes('Remove')) {
        let [command, name] = line.split('|');
          if (myObj.hasOwnProperty(name)) {
            delete myObj[name];
            console.log(`Successfully removed ${name}!`);
          } else {
            console.log(`Invalid operation! ${name} does not exist in the collection.`);
          }
      } else if (line.includes('ChangeKey')) {
        let [command, name, newKey] = line.split('|')
        if (myObj.hasOwnProperty(name)) {
          console.log(`Changed the key of ${name} to ${newKey}!`);
          myObj[name]['key'] = newKey;
        } else {
          console.log(`Invalid operation! ${name} does not exist in the collection.`);
        }
      }
      line = input.shift();
    }

    for (let key in myObj) {
      console.log(`${key} -> Composer: ${myObj[key]['composer']}, Key: ${myObj[key]['key']}`);
    } 
}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]); 
// thePianist([
//     '4',
//     'Eine kleine Nachtmusik|Mozart|G Major',
//     'La Campanella|Liszt|G# Minor',
//     'The Marriage of Figaro|Mozart|G Major',
//     'Hungarian Dance No.5|Brahms|G Minor',
//     'Add|Spring|Vivaldi|E Major',
//     'Remove|The Marriage of Figaro',
//     'Remove|Turkish March',
//     'ChangeKey|Spring|C Major',
//     'Add|Nocturne|Chopin|C# Minor',
//     'Stop']);