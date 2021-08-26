function multiSum(num) {
  let answer = 0
  for(let index = 1; index < num + 1; index++) {
    if (index % 3 === 0 | index % 5 === 0) {
      answer += index
    }
  }
  console.log(answer)
}

multiSum(3);       // 3
multiSum(5);       // 8
multiSum(10);      // 33
multiSum(1000);    // 234168