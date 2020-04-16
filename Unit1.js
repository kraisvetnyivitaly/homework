'use strict';
   let money, time;

function start () {
  money = +prompt('Ваш бюджет на месяц?', '');
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt('Ваш бюджет на месяц?', '');
  }
}
start();

 
let appData = {
  budgetData: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
};
 
function chooseExpenses(){

for (let i = 0; i < 2; i++) {
  
  let a = prompt('Введите обязательную статью расходов в этом месяце', '');
  let b = prompt('Во сколько обойдется?', '');
  if ((typeof(a)) ==='string'&& (typeof(a)) != null && (typeof(b)) != null && a!= '' && b!='' && a.length < 50)
         {
    console.log("done");
   appData.expenses[a] = b; 
   
  } 
      else { 
        alert("Попробуй еще раз");
        i--;
       
      }
    }
  }
  chooseExpenses();

                                          // let i = 0;
                                          // while (i < 2) {
                                          //   let a = prompt('Введите обязательную статью расходов в этом месяце', '');
                                          // let b = prompt('Во сколько обойдется?', '');
                                          // if ((typeof(a)) ==='string'&& (typeof(a)) != null && (typeof(b)) != null && a!= '' && b!='' && a.length < 50)
                                          //          {
                                          //                 console.log("done");
                                          //   appData.expenses[a] = b;
                                            
                                          //   } 
                                          //   else { 
                                          //             alert('Попробуй еще раз');
                                          //             i--;
                                          //           }
                                          // i++;
                                          // }
   

                                          
                                          //    let i = 0;
                                          //    do {
                                            
                                          //    let a = prompt('Введите обязательную статью расходов в этом месяце', '');
                                          //    let b = prompt('Во сколько обойдется?', '');
                                          //    if ((typeof(a)) ==='string'&& (typeof(a)) != null && (typeof(b)) != null && a!= '' && b!='' && a.length < 50)
                                          //        {
                                          //                  console.log("done");
                                          //                 appData.expenses[a] = b;
                                          //        } else {
                                          //          alert('Попробуй еще раз');
                                          //         i--;
                                          //        }
                                          //       }
                                          // while (++i < 2);
      
    
function detectDayBudget(){ 
appData.moneyPerDay = (appData.budgetData / 30).toFixed();
alert("Ежедневный бюджет:" + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel(){
if (appData.moneyPerDay < 100) {
console.log("Минимальный уровень достатка");
}

   else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
   console.log("Нормальный уровень достатка");
  } else if (appData.moneyPerDay > 2000){
    console.log("Высокий уровень достатка");
  } else { 
    console.log("Произошла ошибка");
  }
}
detectLevel();

function CheckSavings(){
  if (appData.savings == true){
    let save = +prompt("Какова сумма накоплений"),
    persent = +prompt("Под какой процент");
    appData.monthIncome = save/100/12*persent;
    alert("Ваш доход за месяц:" + appData.monthIncome);
  }
}
CheckSavings();

 
function chooseOptExpenses(){
    let i = 1;
        while (i < 4){
          let questionOptExpenses = +prompt("Статья необязательных расходов?");
          
                if (isNaN(questionOptExpenses) ||
                 questionOptExpenses != "" || questionOptExpenses != null){
                 
                  appData.optionalExpenses[i] = questionOptExpenses;
                console.log(appData);
                    }
          
              i++;
        console.log("Успешно добавлен необяз. доход");
    }
}
chooseOptExpenses();