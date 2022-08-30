var peserta = [ "3. John ", "8. Frank ", "7. Jack", "6. Harry", "5. Danny", "4. David", "9. Sarah", "2. Ellie", "1. Amber" ];
peserta.sort();
console.log(peserta);

console.log("============soal 2===============");
let dataPeserta = ["john", "laki-laki", "programmer", "30"]
let output = "Halo nama saya, " + dataPeserta.join().slice(0,4) + " saya " + dataPeserta.join().slice(5,14) +
 " berumur " + dataPeserta.join().slice(26,28) + " bekerja sebagai seorang " +  dataPeserta.join().slice(15,25);
//  console.log(dataPeserta.join().slice(5,14));
console.log(output)
console.log("\n");


console.log("============soal 3===============");
// Gunakan perulangan for, Untuk mengeluarkan element pada array ( bukan di index manual ya )
let array1 = ["selamat", "anda", "melakukan", "perulangan", "array", "dengan", "for"]
// array1.forEach(function(e) { //forEach(untuk setiap). untuk setiap elemen yang ada pada array angka , lakukan
//     console.log(e); }); //fungsi berikut ini
for ( i=0; i<array1.length; i++ ) {
    console.log(array1[i]); }

console.log("============soal 4 ===============");
// Gunakan perulangan for, Untuk mengeluarkan element pada array ( bukan di index manual ya )
let array2 = [1, 2, 3, 4, 5, 6,7, 8, 9, 10]
for ( i=0; i<array2.length; i++ ) {
    if(i%2!=0) {
        console.log(array2[i]);
    }}
    
console.log("============soal 5 ===============");
let kalimat= ["aku", "saya", "sangat", "sangat", "senang", "belajar", "javascript"]
kalimat.shift()
var news = kalimat.splice(2,1)
console.log(kalimat.join(' '));

console.log("============soal 6 ===============");
var sayuran=[]
sayuran.push("kangkung", "bayam", "buncis", "kubis", "timun", "seledri", "tauge")
sayuran.sort();
for(var i = 0; i < sayuran.length; i++) {
    console.log(i+1 ,'.', sayuran[i]);
}

console.log("============soal 7 ===============");
var numbers = [ 3 , 1 , 2 , 3 , 5, 2, 3 , 2, 1 , 5, 3 ,2, 7, 3 , 4, 6, 3, 6, 3]
var nilai = 0;
var indeks = 0;
var mode;
for (var i=0; i<numbers.length; i++){
    for (var j=i; j<numbers.length; j++)
    {
        if (numbers[i] == numbers[j])
         indeks++;
        if  (nilai<indeks)
        {
         nilai=indeks; 
         mode = numbers[i];
        }
    }
        indeks=0;
}
console.log("angka yang sering muncul adalah:", mode+" ( "  + nilai +" kali ) ") ;




console.log("============soal 8 ===============");
var word = "car"
var dalamArray = []
for (i=0; i<=word.length; i++) {
    for (j=0; j<=word.length; j++) {
        if (word.slice(i,j) != 0){
            dalamArray.push(word.slice(i,j))
        }
    }
}console.log(dalamArray)

console.log("============soal 9 ===============");
// tentukan jumlah dari kumpulan angka dari variabel dibawah ini
var numbers = [ 4,5,1,4,6,8,9,21]
var hasil =0;
for(i = 0; i <numbers.length; i++){
    hasil += numbers[i];
}
console.log(hasil);

console.log("============soal 10 ===============");
// jumlahkan elemen angka di dalam array dua dimensi tersebut sehingga menghasilkan output seperti dibawah ini:
// [33, 21, 30]
var kumpulanAngka = [
    [1,3,5,7,8,9],
    [4,5,6,2,3,1],
    [6,7,8,1,3,5],
   ]
var hasil = []
for(var i=0; i<kumpulanAngka.length; i++){
    var has = 0;
    for(var j=0; j<kumpulanAngka[i].length; j++){
        has += kumpulanAngka[i][j];
    }
    // console.log(has);
    hasil.push(has);
}
console.log(hasil);
