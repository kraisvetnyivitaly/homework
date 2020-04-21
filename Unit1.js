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
  chooseExpenses:function(){
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
      },
  detectDayBudget:function(){
        appData.moneyPerDay = (appData.budgetData / 30).toFixed();
        alert("Ежедневный бюджет:" + appData.moneyPerDay);
      },
  detectLevel:function(){
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
      },
  CheckSavings:function(){
    if (appData.savings == true){
      let save = +prompt("Какова сумма накоплений"),
      persent = +prompt("Под какой процент");
      appData.monthIncome = save/100/12*persent;
      alert("Ваш доход за месяц:" + appData.monthIncome);
    }
  },
  chooseOptExpenses:function() {
    let i = 1;
    while (i < 4){
      let questionOptExpenses = +prompt("Статья необязательных расходов?");
      
            if (isNaN(questionOptExpenses) ||
             questionOptExpenses != "" || questionOptExpenses != null){
              console.log("Все верно!");
              appData.optionalExpenses[i] = questionOptExpenses;
             }
            i++;
    console.log("Успешно добавлен необяз. доход");
  }
    },
  chooseIncome: function() {
      let items = prompt('Что принесёт дополнительный доход? (Перечислите через запятую)', '');
      appData.income = items.split(',');
    
      while( typeof items !== 'string' || items == '' || items == null ) {
          items = +prompt('Что принесёт дополнительный доход? (Перечислите через запятую)', '');
    
      }
    
     appData.income.push(prompt('Способы доп. заработка: ' + ' '));
     appData.income.sort();
     console.log(appData.income);
     appData.income.forEach(function(item, i) {
         alert( (i + 1) + ': ' + item + '');
      });
       
      } 
     };
  for(let key in appData){                    
      console.log("Наша программа включает в себя данные: " + key);
    }
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