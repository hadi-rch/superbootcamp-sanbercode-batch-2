// function pasanganTerbesar(num) {
//     var strNum = num.toString()
//     var lastNum = 0
//     for (i=0;i<strNum.length;i++){
//       if (i !== strNum.length-1){
//         var currentNum = strNum.substring(i,i+2)
//         if (lastNum < currentNum){
//           lastNum = currentNum
//         }
//       }
//     }
//     return lastNum
//   }
  
function pasanganTerbesar(num) {
    var strNum = num.toString()
    var lastNum = 0
      (i < strNum.length){
      if (i !== strNum.length-1){
        var currentNum = strNum.substring(i,i+2)
        if (lastNum < currentNum){
          lastNum = currentNum
        //   num ++;
        }
      }
    } 
    return lastNum
}
  



  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
  
  console.log()