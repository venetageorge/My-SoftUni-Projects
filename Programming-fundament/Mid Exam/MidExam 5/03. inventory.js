function inventory(arr) {
  let newArr = arr.slice(0);
  let collectingItems = newArr.shift().split(', ');
  let index = 0;
  let command = newArr[index];
  index++;

  while (command !== 'Craft!') {

    let basis = command.split(" - ");
    let toDo = basis[0];
    let material = basis[1];

    switch (toDo) {
      case 'Collect':
        if (!collectingItems.includes(material)) {
          collectingItems.push(material);
        }
        break;
      case 'Drop':
        if (collectingItems.includes(material)) {
          let i = collectingItems.indexOf(material);
          collectingItems.splice(i, 1);
        }
        break;
      case 'Combine Items':
        let line = material.split(":");
        let first = line[0];
        let second = line[1];

        if (collectingItems.includes(first)) {
          let i = collectingItems.indexOf(first);
          collectingItems.splice(i + 1, 0, second);
        }
        break;
      case 'Renew':
        if (collectingItems.includes(material)) {
          let i = collectingItems.indexOf(material);
          let tobeDeleted = collectingItems.splice(i, 1);
          collectingItems.push(tobeDeleted)
        }
        break;
    }

    command = newArr[index];
    index++;
  }
  console.log(collectingItems.join(', '));
}
inventory(['Iron, Wood, Sword',
  'Collect - Gold',
  'Drop - Wood',
  'Craft!'
]);
inventory(['Iron, Sword',
  'Drop - Bronze',
  'Combine Items - Sword:Bow',
  'Renew - Iron',
  'Craft!']);