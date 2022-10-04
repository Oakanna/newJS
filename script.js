"use strict";

let money = +prompt("Ваш бюджет на месяц?", ""),
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

// * do...while
// let i = 0;
// do {
//   let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     b = prompt("Во сколько обойдется?", "");

//   if (
//     typeof a === "string" &&
//     (typeof a != null) & (typeof b != null) &&
//     a != "" &&
//     b != ""
//   ) {
//     console.log("done");
//     appData.expenses[a] = b;
//   }
//   i++;
// } while (i < 2);

//* while
// while (i < 2) {
//   let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     b = prompt("Во сколько обойдется?", "");

//   if (
//     typeof a === "string" &&
//     (typeof a != null) & (typeof b != null) &&
//     a != "" &&
//     b != ""
//   ) {
//     console.log("done");
//     appData.expenses[a] = b;
//   }
//   i++;
// }

//* for
for (let i = 0; i < 2; i++) {
  let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
    b = prompt("Во сколько обойдется?", "");

  if (
    typeof a === "string" &&
    (typeof a != null) & (typeof b != null) &&
    a != "" &&
    b != ""
  ) {
    console.log("done");
    appData.expenses[a] = b;
  }
}

appData.moneyPerDay = appData.budget / 30;
alert(`Бюджет за день: ${appData.moneyPerDay}`);
console.log(appData);

if (appData.moneyPerDay < 100) {
  console.log("Поменяй работу, нищеброд");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Not bad");
} else if (appData.moneyPerDay > 2000) {
  console.log("Excellent");
} else {
  console.log("WTF is this?");
}
