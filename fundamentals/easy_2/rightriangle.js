function triangle(num) {
  let spaces = (num - 1);
  
  for(let stars = 1; stars < num + 1; stars++) {
    console.log(' '.repeat(spaces) + '*'.repeat(stars));
    spaces -= 1
  } 
}

triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********