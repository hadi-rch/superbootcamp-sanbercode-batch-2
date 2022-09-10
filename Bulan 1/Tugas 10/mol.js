function pasanganTerbesar(num) {
    var lastNum = 0
    for (i=0;i<num.toString().length;i++){
      if (i !== num.toString().length-1){
        var currentNum = num.toString().substring(i,i+2)
        if (lastNum < currentNum){
          lastNum = currentNum
        }
      }
    }
    return lastNum
  } 
  
// TEST CASE
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
console.log(pasanganTerbesar(9)); // 0
console.log(pasanganTerbesar(7)); // 0
