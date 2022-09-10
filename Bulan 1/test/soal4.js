// Diberikan dua buah kata di bawah ini. Susunlah kedua kata tersebut agar menjadi tersusun terbalik dari karakter paling belakang.

var kata = "superbootcamp"
var balikKata = kata.split('');
var balik = balikKata.reverse();
var bal = balik.join('');          
console.log(bal) // Output : pmactoobrepus

var bootcamp = "Sanbercode"
var bootcampReverse =bootcamp.split('');
var bootc = bootcampReverse.reverse(); 
var boot = bootc.join('');
console.log(boot);
console.log(balikKata);
var asal = balikKata.indexOf('e');
console.log(asal);
console.log(balikKata);

