'use strict';


let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');
 
let appData = {
  budgetData: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};
 
// let a1 = prompt('Введите обязательную статью расходов в этом месяце', '');
// let a2 = prompt('Во сколько обойдется?', '');
// let a3 = prompt('Введите обязательную статью расходов в этом месяце', '');
// let a4 = prompt('Во сколько обойдется?', '');
 

 
for (let i = 0; i < 2; i++) {
  
  let a = prompt('Введите обязательную статью расходов в этом месяце', '');
  let b = prompt('Во сколько обойдется?', '');
  if ((typeof(a)) ==='string'&& (typeof(a)) != null && (typeof(b)) != null && a!= '' && b!='' && a.length < 50)
         {
    console.log("done");
   appData.expenses[a] = b;
   
  } 
      else { 
        alert('Попробуй еще раз');
        i--;
       
      }
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
      
    
    
appData.moneyPerDay = appData.budgetData / 30;

alert("Ежедневный бюджет:" + appData.moneyPerDay);
if (appData.moneyPerDay < 100) {
console.log('Минимальный уровень достатка');
}
   else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
   console.log("Нормальный уровень достатка");
  } else if (appData.moneyPerDay > 2000){
    console.log("Высокий уровень достатка");
  } else { 
    console.log("Произошла ошибка");
  
}