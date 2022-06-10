"use strict";
/**
 * Возвращает x, возведённое в n-ную степень.
 *
 * @param {number} x Возводимое в степень число.
 * @param {number} n Степень, должна быть натуральным числом.
 * @return {number} x, возведённое в n-ную степень.
 */

function pow(x, n) {
    let obr = x;
    if(n==0) return 1;
    if(n<0){
      x= 1;
      for(let i = 0; i>n; i--){
        x/=obr;
    }
    }
    else for(let i = 1; i<n; i++){
        x*=obr;
    }
    return x;
  }

  /**
 * Возвращает сумму чисел от 1 до n
 *
 * @param {number} n Натуральное число, до которого суммирует функция.
 * @return {number} сумма чисел от 1 до n.
 */

function sumTo(n) {
    let summa = 0;
    for(let i = 0; i<=n; i++){
        summa+=i;
    }
    return summa;
  }

   /**
 * Возвращает факториал числа n.
 *
 * @param {number} n Натуральное число, которое возводится в факториал.
 * @return {number} факториал чисел от  1 до n.
 */

function factorial(n) {
    if(n == 0){
        return 1;
    }
    return n*factorial(n-1);
  }

    /**
 * Возвращает число фибоначи для n.
 *
 * @param {number} n Натуральное число, из которого берется число фибоначи.
 * @return {number} число фибоначи для n.
 */

function fib(n) {
    let firstnum = BigInt(0);
    let secondnum = BigInt(1);
    let temp = 0n;
    if(n == 0){
        return 0;
    }
    for(let i=0; i<n; i++){
      temp = firstnum + secondnum;
      secondnum = firstnum;
      firstnum = temp;
      
    }
return firstnum;
  }
    /**
 * 
 * @param {number} y натуральное число для сравнения
 * @param {number} x Натуральное число, из которого берется число фибоначи.
 * @return {number} результат сравнения двух чисел.
 */
function compare(x){
 let anon = function (y){
  if(y > x) return true
  else if(y < x) return false
  else return null;
 }
return anon;
}
  /**
 * 
 * @param {number} num натуральное число для сравнения
 * @param {number} cols Натуральное число, из которого берется число фибоначи.
 * @return {number} результат сравнения двух чисел.
 */
function printnumbers(num, cols){
let tabl = "";
let schet = 0;
let stroka = 0;
let stroki = Math.ceil(num/cols);
let row=0;
for(let i=0;i<=num;i++){
  row = schet*stroki;
  row += stroka;
  tabl+=String(row);
  tabl+="\t"
  schet++;
  if(schet==cols){
    tabl+= "\n";
    schet = 0;
    stroka++;
  }
}
return tabl;
}
© 2022 GitHub, Inc.
Terms
Privacy
Security
St
