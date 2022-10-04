"use strict";

let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
}
start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
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
//   }else {
//     console.log("Bad girl");
//     i--;
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
//   }else {
//     console.log("Bad girl");
//     i--;
//   }
//   i++;

// }

//* for
function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
      b = +prompt("Во сколько обойдется?", "");

    if (
      typeof a === "string" &&
      (typeof a != null) & (typeof b != null) &&
      a != "" &&
      b != "" &&
      a.length < 50
    ) {
      console.log("done");
      appData.expenses[a] = b;
    } else {
      console.log("Bad girl");
      i--;
    }
  }
}

// chooseExpenses();

function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed();
  alert(`Бюджет за день: ${appData.moneyPerDay} rub`);
}
// detectDayBudget();

function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log("Поменяй работу, нищеброд");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Not bad");
  } else if (appData.moneyPerDay > 2000) {
    console.log("Excellent");
  } else {
    console.log("WTF is this?");
  }
}

// detectLevel();

function checkSaving() {
  if (appData.savings == true) {
    let save = +prompt("Какова ваша сумма накоплений?"),
      percent = +prompt("Под какой процент?");

    appData.monthIncome = ((save / 100 / 12) * percent).toFixed();
    alert(`Доход в месяц с вашего депозита: ${appData.monthIncome}`);
  }
}
// checkSaving();

function chooseOptExpenses() {
  for (let i = 1; i < 4; i++) {
    let option = prompt("Статья необязательных расходов?");

    appData.optionalExpenses[i] = option;
  }
}

chooseOptExpenses();
console.log(appData);
