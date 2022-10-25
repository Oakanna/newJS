"use strict";

let startBtn = document.getElementById("start"),
  budgetValue = document.getElementsByClassName("budget-value")[0],
  dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
  levelValue = document.getElementsByClassName("level-value")[0],
  expensesValue = document.getElementsByClassName("expenses-value")[0],
  optionalExpensesValue = document.getElementsByClassName(
    "optionalexpenses-value"
  )[0],
  incomeValue = document.getElementsByClassName("income-value")[0],
  monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0],
  yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0],
  expensesItem = document.getElementsByClassName("expenses-item"),
  expensesBtn = document.getElementsByTagName("button")[0],
  optionalExpensesBtn = document.getElementsByTagName("button")[1],
  countBtn = document.getElementsByTagName("button")[2],
  optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
  incomeItem = document.querySelector(".choose-income"),
  checkSavings = document.querySelector("#savings"),
  sumValue = document.querySelector(".choose-sum"),
  percentValue = document.querySelector(".choose-percent"),
  yearValue = document.querySelector(".year-value"),
  monthValue = document.querySelector(".month-value"),
  dayValue = document.querySelector(".day-value");

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
  chooseExpenses: function () {
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
  },
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert(`Бюджет за день: ${appData.moneyPerDay} rub`);
  },
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log("Поменяй работу, нищеброд");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Not bad");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Excellent");
    } else {
      console.log("WTF is this?");
    }
  },
  checkSaving: function () {
    if (appData.savings == true) {
      let save = +prompt("Какова ваша сумма накоплений?"),
        percent = +prompt("Под какой процент?");

      appData.monthIncome = ((save / 100 / 12) * percent).toFixed();
      alert(`Доход в месяц с вашего депозита: ${appData.monthIncome}`);
    }
  },
  chooseOptExpenses: function () {
    for (let i = 1; i < 4; i++) {
      let option = prompt("Статья необязательных расходов?");

      appData.optionalExpenses[i] = option;
    }
  },
  chooseIncome: function () {
    let item = prompt(
      "Что принесет дополнительный доход? (Перечислите через запятуюю)"
    );
    if (typeof item !== "string" && typeof item == null && item == "") {
      console.log("Вы ввели некорректные данные или не ввели их вовсе");
    } else {
      appData.income = item.split(", ");
      appData.income.push(prompt("Может что-то еще?"));
      appData.income.sort();
    }

    appData.income.forEach(function (item, index) {
      alert("Способы доп. заработка: " + ++index + " - " + item);
    });
  },
};
for (let key in appData) {
  console.log(
    "Наша программа включает в себя данные: " + key + " - " + appData[key]
  );
}
// 3) Используя цикл for in для объекта (appData) вывести в консоль сообщение "Наша программа включает в себя данные: " (вывести весь appData)
// 4) Проверить, чтобы все работало и не было ошибок в консоли
// 5) Добавить папку с уроком на свой GitHub
// chooseExpenses();

// detectDayBudget();

// detectLevel();

// checkSaving();

// chooseOptExpenses();
console.log(appData);
