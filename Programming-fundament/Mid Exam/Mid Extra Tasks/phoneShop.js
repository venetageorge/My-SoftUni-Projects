function phoneShop(arr) {
 
    let listOfPhones = arr.shift().split(", ");
   
    for (let i = 0; i < arr.length; i++) {
      let [command, data] = arr[i].split(" - ");
      if(command === "Add") {
          if (listOfPhones.includes(data)) {
              continue;
          } else {
              listOfPhones.push(data);
          }
      } else if (command === "Remove") {
          if(listOfPhones.includes(data)) {
              for (let j = 0;j < listOfPhones.length; j++) {
                  if (data === listOfPhones[j]) {
                      listOfPhones.splice(j, 1);
                  }
              }
          } else {
              continue;
          }
      } else if (command === "Bonus phone") {
          let [oldPhone, newPhone] = data.split(":");
          if(listOfPhones.includes(oldPhone)) {
              for(let k = 0; k < listOfPhones.length; k++) {
                  if(listOfPhones[k] === oldPhone) {
                      listOfPhones.splice(k + 1, 0, newPhone);
                  }
              }
          } else {
              continue;
          }
      } else if (command === "Last"){
          if(listOfPhones.includes(data)) {
               listOfPhones.splice(listOfPhones.indexOf(data), 1);
               listOfPhones.push(data);
          } else {
              continue;
          }
      } else {
          console.log(listOfPhones.join(", "));
      }
    }
  }
  phoneShop([
    "SamsungA50, MotorolaG5, IphoneSE",
    "Add - Iphone10",
    "Remove - IphoneSE",
    "End",
  ]);
  phoneShop([
    "HuaweiP20, XiaomiNote",
    "Remove - Samsung",
    "Bonus phone - XiaomiNote:Iphone5",
    "End",
  ]);
  phoneShop([
    "SamsungA50, MotorolaG5, HuaweiP10",
    "Last - SamsungA50",
    "Add - MotorolaG5",
    "End",
  ]);