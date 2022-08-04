function secretChat(input) {
  let message = input.shift();

  for (let i = 0; i < input.length; i++) {
      let basis = input[i].split(':|:');
      let command = basis[0];

      if (command === 'InsertSpace') {
        let index = Number(basis[1]);
        let concat = message.substring(index);
        message = message.substring(0, index) + " " + concat;
        console.log(message);
      } else if (command === 'Reverse') {
        let substr = basis[1];
        let length = substr.length;
        if (message.includes(substr)) {
            let subIndex = message.indexOf(substr);
            let sliced = message.substring(0, subIndex);
            let slicedSubstr = message.substring(subIndex, subIndex + length).split('').reverse().join('');
            let slicedAll = message.substring(subIndex + length)
            message = sliced + slicedAll + slicedSubstr;
            console.log(message);
        } else {
          console.log(`error`);
        }
      } else if (command === 'ChangeAll') {
        let substri = basis[1];
        let replacedd = basis[2];
        if (message.includes(substri)) {
          message = message.split(substri).join(replacedd);
          console.log(message);
        }
      } else if (command === 'Reveal') {
        break;
      }
  }
  console.log(`You have a new text message: ${message}`);
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ]);
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal']);