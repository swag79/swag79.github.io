"use strict";
function getDecimal(num) {
            let a = num.slice(num.indexOf("."));
            let str = 0 + a;
            if (Number(num) < 0) {
                str = 1 - Number(str);
                str = str.toFixed(a.length - 1);
            }
            return str;
}
function ucFirst(str) {
            return (str[0].toUpperCase() + str.slice(1));
        }
function checkSpam(str) {
            str = str.toLowerCase();
            if ((str.includes('xxx')) || (str.includes('viagra')))
                return true;
            else return false;
        }
function truncate(str, maxlength) {
            if (str.length > maxlength)
                str = str.slice(0, maxlength - 1) + '\u{2026}';
            return str;
        }
function camelize(str) {
            let id;
            while (str.includes("-")) {
                id = str.indexOf('-');
                str = str.slice(0, id) + str[id + 1].toUpperCase() + str.substring(id + 2);
            }
            return str;
        }
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
  function fibs(N){
  if(N == 0){
        return 0;
    }
  else{
    let str="";
    for(let i=0; i<N; i++){
    str+= fib(i)+' ';
  }
  return str;
  }
  }
  function arrReverseSorted(arr){
    return arr.sort((a, b) => b-a);
  }
  function sum(...arr) {
            let s = 0;
            for (let i of arr)
                s += +i;
            return s;
        }     
