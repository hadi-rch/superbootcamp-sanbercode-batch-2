function palindrome(kata) {  
    var arrValue = kata.split (''); // mengubah string menjadi array menggunakan fungsi string.split()    
    var reveArrVal = arrValue.reverse();   // gunakan metode reverse() untuk membalikkan nilai array  
    var revString = reveArrVal.join('');  // gunakan metode join() untuk mengelompokkan nilai array ke dalam string  
    
if (kata == revString)  {  
return('true'); 
}else {  
return('false' ); 
}  
}  
// var value = palindrome("asssdsa");
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('nababan')); // true
console.log(palindrome('haji ijah')); // true
console.log(palindrome('mister')); // false