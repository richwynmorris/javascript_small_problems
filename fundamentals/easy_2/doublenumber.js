function twice(num) {
  let strNum = String(num)
  let firstHalf = strNum.split('').slice(0, strNum.length / 2).join('')
  let secondHalf = strNum.split('').slice(strNum.length / 2).join('');

  if (firstHalf === secondHalf) {
    console.log(num)
  } else {
    console.log(num * 2)
  }
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676