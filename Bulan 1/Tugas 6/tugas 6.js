console.log("=============soal 1 ==================");
var iteration = 2
var iteration2 = 20

console.log("Looping prtama");
while(iteration <= 20) { 
        console.log(iteration  + ' - I love coding'); 
    iteration+=2; 
}
console.log("Looping kedua");
while(iteration2 >= 2) { 
            console.log(iteration2  + ' - I Will become a fullstack developer'); 
    iteration2-=2; 
  }

console.log("=============soal 2 ==================");
var nilai = 1;
var akhir = 20;

for(a=1; a<=20; a++) {
    if(a%2==0) {
        console.log(a + ' - Angka Genap')
    }else{
        console.log(a + ' - Angka Ganjil')
    }}
    
console.log("=============soal 3 ==================");
var angka = 20
for ( var i = 1; i <= angka; i++) {
    if(i%2==0 && i%3==0) {
        console.log(i +  ' - Super Bootcamp')
    } else if(i%2!=0 && i%3==0) {
        console.log(i + ' - I Love Coding')
    } else if(i%2==0) {
        console.log(i + ' - Berkualitas')
    } else {
        console.log(i + ' - Santai')
    }
}

console.log("=============soal 4 ==================");
var s ='';
for(var i=0; i<7; i++){
    for(var j=0; j<=i; j++){
        s += '#';
    }
    s += '\n'
}
console.log(s);

console.log("=============soal 5 ==================");
var had ='';
    for (var i=7; i>0; i--){
        for (var j=1; j<=7; j++){
            if (j >= i) {
                had += '#';
            } else {
                had += ' '
            }
        }  had += '\n'
           }
    console.log(had);

console.log("=============soal 6 ==================");
var xy ='';
for(var i=0; i<5; i++){
    for(var j=0; j<=i; j++){
        xy += '#';
        }
            xy += '\n'
}
for (var i=4; i>0; i--){
    for(var j=0; j<i; j++){
        xy += '#';
        }
        xy += '\n'
    }
console.log(xy);
console.log("=============soal 7 ==================");
var sentence = "Super Bootcamp 2022"
var vokal = "aiueo0123456789"
var huruf = sentence.toLowerCase();
var hanyaVokal = ""

for (var i=0; i<sentence.length; i++){
   for (var j= 0; j<vokal.length; j++){
       if (huruf.charAt(i) == vokal.charAt(j)){
           hanyaVokal += huruf.charAt(i)
       }
   }
}
console.log(hanyaVokal)

console.log("=============soal 8 ==================");
var sentence = "Fullstack Developer"
var konsonan = "bcdfghjklmnpqrstvwxyz"
var huruf1 = sentence.toLowerCase();
var hanyaKonsonan = ""

for (var i=0; i<sentence.length; i++){
   for (var j= 0; j<konsonan.length; j++){
       if (huruf1.charAt(i) == konsonan.charAt(j)){
           hanyaKonsonan += huruf1.charAt(i)
       }
   }
}
console.log(hanyaKonsonan)