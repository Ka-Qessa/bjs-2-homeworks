"use strict"

function solveEquation(a, b, c) {
    let arr = [];
    let d = b ** 2 - 4 * a * c;
    
    if (d === 0) {
      arr.push(-b / (2 * a));
    } else if (d > 0) {
      arr.push((-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a));
    }
    return arr;
}
console.log(solveEquation());

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  //Процентная ставка в месяц (от 0 до 1)
  const monthlyInterest = percent / 100 / 12;

  //Расчет тела кредита (сумма кредита - первоначальны взнос)
  const loanAmount = amount - contribution;

  //Расчет ежемесячного платежа
  const monthlyPayment = loanAmount * (monthlyInterest + (monthlyInterest / (Math.pow(1 + monthlyInterest, countMonths) - 1)));

  // Рассчет общей суммы выплат
  const totalPayment = monthlyPayment * countMonths;

  return +totalPayment.toFixed(2);
}
console.log(calculateTotalMortgage());
