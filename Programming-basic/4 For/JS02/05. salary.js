function salary(input) {
  let index = 0;
  let openTabs = Number(input[index]);
  index++;
  let money = Number(input[index]);
  index++;
  let facebookTax = 150;
  let instaTax = 100;
  let redditTax = 50;
  let stillHaveMoney = true;

  for (let i = 0; i < openTabs; i++) {
    let currentTab = input[index];
    index++

    if (currentTab === "Facebook") {
      money -= facebookTax;
    } else if (currentTab === "Instagram") {
      money -= instaTax;
    } else if (currentTab === "Reddit") {
      money -= redditTax;
    }

    if (money <= 0) {
      console.log(`You have lost your salary.`);
      stillHaveMoney = false;
      break;
    }
  }
  if (stillHaveMoney) {
    console.log(`${money}`)
  }
}
salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"]);
