function partyTime(input) {
  let vip = [];
  let normal = [];
  let isParty = false; 

  for (let element of input) {
    if (element === 'PARTY') {
      isParty = true; 
      continue;
    }

    if (!isParty) {
    let firstCharacter = element[0];
    if (isNaN(firstCharacter)) {
      normal.push(element);
    } else {
      vip.push(element);
    }
  } else {
    let firstCharacter = element[0];
    if (isNaN(firstCharacter)) {
      let index = normal.indexOf(element);
      normal.splice(index, 1);
    } else {
      let ind = vip.indexOf(element);
      vip.splice(ind, 1);
    }
  }
  }
  let size = vip.length + normal.length; 
  console.log(size);
  for (let key of vip) {
    console.log(key);
  }

  for (let key of normal) {
    console.log(key);
  }
}
partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]);
partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]);