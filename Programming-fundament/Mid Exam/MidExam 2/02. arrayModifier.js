function arrayModifier(input) {
  let arr = input.shift().split(' ').map(Number);

  while (input[0] != 'end') {
    let income = input.shift().split(' ');
    let command = income[0];
    let one = Number(income[1]);
    let second = Number(income[2]);

    if (command === 'swap') {
      let buffer = arr[one];
      arr[one] = arr[second];
      arr[second] = buffer;
    } else if ((command === 'multiply')) {
      arr[one] *= arr[second];
    } else if ((command === 'decrease')) {
      for (i = 0; i < arr.length; i++) {
        arr[i]--;
      }
    }
  }
  console.log(arr.join(', '));
}
arrayModifier([
  '23 -2 321 87 42 90 -123',
  'swap 1 3',
  'swap 3 6',
  'swap 1 0',
  'multiply 1 2',
  'multiply 2 1',
  'decrease',
  'end'
]
);
arrayModifier([
  '1 2 3 4',
  'swap 0 1',
  'swap 1 2',
  'swap 2 3',
  'multiply 1 2',
  'decrease',
  'end'
]
);