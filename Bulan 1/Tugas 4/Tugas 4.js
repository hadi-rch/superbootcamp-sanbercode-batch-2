// =======soal 1===========
var qwe = "^^^^^^^^^Soal 1^^^^^^^^^^^"
var perkenalan = 'Nama saya adalah';
var nama = "Hadi."
var kata1 = "saya"
var kata2 = "berharap"
var kata3 = "untuk"
var kata4 = "menjadi"
var kata5 = "seorang"
var kata6 = "software"
var kata7 = "Developer"
var res = perkenalan.concat(" ", nama, " ", kata1, " ", kata2, " ", kata3, " ", kata4, " ", kata5, " ", kata6, " ", kata7);
console.log(res);
console.log(qwe);


// =======soal 2===========
var asd = "^^^^^^^^^Soal 2^^^^^^^^^^^"
var abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var angka = "0123456789"

// 1. password1 = "TES123"
var password1 = abjad[19] + abjad[4] + abjad[18] + abjad[19] + angka[1] + angka[2] + angka[3]
console.log("password ke satu: " + password1)

// 2. password2 = "B3B3K"
var password2 = abjad[1] + angka[3] + abjad[1] + angka[3] + abjad[10]
console.log("password ke dua: " + password2)

// 3. password3 = "R4H4514"
var password3 = abjad[17] + angka[4] + abjad[7] + angka[4] + angka[5] + angka[1] + angka[4]
console.log("password ke tiga: " + password3)
console.log(asd);

//soal =====3======
var zxc = "^^^^^^^^^Soal 3^^^^^^^^^^^"
var sentence2 = 'wow JavaScript is so cool';
var exampleFirstWord2 = sentence2.substring(0, 3);
var secondWord2 = sentence2.substring(4, 14);
var thirdWord2 = sentence2.substring(15, 17);
var fourthWord2 = sentence2.substring(18, 20);
var fifthWord2 = sentence2.substring(21, 25);

console.log('First Word: ' + exampleFirstWord2);
console.log('Second Word: ' + secondWord2);
console.log('Third Word: ' + thirdWord2);
console.log('Fourth Word: ' + fourthWord2);
console.log('Fifth Word: ' + fifthWord2);
console.log(zxc);
// Uraikan lah kalimat sentence2 di atas menjadi kata-kata penyusunnya. Output:
// First Word: wow
// Second Word: JavaScript
// Third Word: is
// Fourth Word: so
// Fifth Word: cool


//======Soal 4==========
var www = "^^^^^^^^^Soal 4^^^^^^^^^^^"
var sentence3 = 'wow JavaScript is so cool';

var exampleFirstWord3 = sentence3.substring(0, 3);
var secondWord3 = sentence3.substring(4, 14);
var thirdWord3 = sentence3.substring(15, 17);
var fourthWord3 = sentence3.substring(18, 20);
var fifthWord3 = sentence3.substring(21, 25);

var firstWordLength = exampleFirstWord3.length
var secondWordLength = secondWord3.length
var thirdWordLength = thirdWord3.length
var fourthWordLength = fourthWord3.length
var fifthWordLength = fifthWord3.length

// lanjutkan buat variable lagi di bawah ini
console.log('First Word: ' + exampleFirstWord3 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord3 + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord3 + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord3 + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord3 + ', with length: ' + fifthWordLength);
console.log(www);

// Output:
// First Word: wow, with length: 3
// Second Word: JavaScript, with length: 10
// Third Word: is, with length: 2
// Fourth Word: so, with length: 2
// Fifth Word: cool, with length: 4

//======Soal 5==========
var qqq = "^^^^^^^^^Soal 5^^^^^^^^^^^"
var abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// 1. password pertama : HELLO
var kode1 = abjad.indexOf("H") + "-" + abjad.indexOf("E") + "-" + abjad.indexOf("L") + "-" + abjad.indexOf("L") + "-" + abjad.indexOf("O")
console.log("kode 1: " + kode1)

// Output 

// kode 1: 7-4-11-11-14

// 2. password kedua : WORLD
var kode2 = abjad.indexOf("W") + "-" + abjad.indexOf("O") + "-" + abjad.indexOf("R") + "-" + abjad.indexOf("L") + "-" + abjad.indexOf("D")
console.log("kode 2: " + kode2)

// 3. password ketiga : IMREADY
var kode3 = abjad.indexOf("I") + "-" + abjad.indexOf("M") + "-" + abjad.indexOf("R") + "-" + abjad.indexOf("E") + "-" + abjad.indexOf("A") + "-" + abjad.indexOf("D") + "-" + abjad.indexOf("Y")
console.log("kode 3: " + kode3)
console.log(qqq)


//======Soal 6==========
var ert = "^^^^^^^^^Soal 6^^^^^^^^^^^"
// buatlah variabel-variabel seperti di bawah ini
var pertama = "saya";
var kedua = "senang";
var ketiga = "belajar";
var keempat = "javascript";
var xxx = "^^^^^^^^^Soal 4^^^^^^^^^^^"
// gabungkan variabel-variabel tersebut agar menghasilkan output
var firstletter = pertama.charAt(0)
var firstlettercap = firstletter.toUpperCase()
var remain = pertama.slice(1)
var aku = firstlettercap + remain
var bahagia = kedua.charAt(0).toUpperCase() + kedua.slice(1)
var newbahagia = bahagia.replace('g', 'G');
var belajar = ketiga.charAt(0).toUpperCase() + ketiga.slice(1)
var newbelajar = belajar.replace('r', 'R');
var javascript = keempat.toUpperCase();
var gabungan = aku.concat(" ", newbahagia, " ", newbelajar, " ", javascript);
console.log(gabungan)
console.log(ert)
// Saya SenanG BelajaR JAVASCRIPT


//======Soal 7==========
var dfg = "^^^^^^^^^Soal 7^^^^^^^^^^^"
var x = Number("1000")
var panjang = Number("12");
var lebar = Number("7");
var alas = Number("6");
var tinggi = Number("13");

var luassegitiga = 0.5 * alas * tinggi;
var luaspersegi = panjang * lebar;

console.log(luassegitiga)
console.log(luaspersegi)
console.log(dfg)

//======Soal 8==========
var dfg = "^^^^^^^^^Soal 8^^^^^^^^^^^"
var sisi = "12";
var jariJari = "7.5";

var Xsisi = parseInt(sisi);
var Xjarijari = parseFloat(jariJari);

var luasxpersegi = Xjarijari * Xsisi;
var luaslingkaran = 3.14 * Xjarijari * Xjarijari;

console.log(luasxpersegi)
console.log(luaslingkaran)

