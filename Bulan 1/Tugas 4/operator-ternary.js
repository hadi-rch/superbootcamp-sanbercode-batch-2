var nilai = 50;
var grade =
  nilai > 80
    ? 'A'
    : nilai > 60
    ? 'B'
    : nilai > 40
    ? 'C'
    : nilai > 20
    ? 'D'
    : 'E';

console.log(grade);


//tanpa ternary operator
var nilaiy = 50;
var gradea;

gradea = 'A';
if (nilaiy > 80) {
} else if (nilaiy > 60) {
  gradea = 'B';
} else if (nilaiy > 40) {
  gradea = 'C';
} else if (nilaiy > 20) {
  gradea = 'D';
} else {
  grade = 'E';
}
console.log(gradea); // C


// tanpa ternary operator
var age = 20
var bisaVote = ""
if (age > 20){
  bisaVote = "bisa vote"
}else{
  bisaVote = "belum bisa vote"
}
console.log(bisaVote)

// contoh 2  
var angka = 9
var jenisBilangan = ""
if (angka % 2 === 0){
  jenisBilangan = "Bilangan Genap"
}else{
  jenisBilangan = "Bukan Bilangan Genap" 
}
console.log(jenisBilangan)

// dengan ternary opearator

// contoh 1  
var age= 20
var bisaVote= age > 20 ? "bisa vote" : "belum bisa vote" // hasilnya belum bisa vote
console.log(bisaVote)

// contoh 2  
var angka = 9
var jenisBilangan = angka % 2 === 0 ? "Bilangan Genap" : "Bukan Bilangan Genap" //hasilnya bukan bilangan genap
console.log(jenisBilangan)