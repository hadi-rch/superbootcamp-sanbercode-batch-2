function arrangeString (str) {
    var arrOfStr = str.split("")
    if (arrOfStr.length > 0){
      return arrOfStr
    }else{
      return '""'
    }
  }
  
  // TEST CASE 
  console.log(arrangeString("bahasa")) // Output : aaabhs
  console.log(arrangeString("similikiti")) // Output : iiiiiklmst
  console.log(arrangeString("sanbercode")) // Output : abcdeenors 
  console.log(arrangeString("")) // Output : ""
  
  
  console.log()


  function alayify(str) {
    // code di sini
}

// TEST CASES
console.log(alayify("StateOfJS2021")) // sTATEoFjs2021 
console.log(alayify("I am N0t 4LaY")) // i AM n0t 4lAy
console.log(alayify("001-A-3-5TrdYW")) // "001-a-3-5tRDyw"