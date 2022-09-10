// 5.
// Terdapat string berupa nama lengkap yang terdiri atas nama depan (firstName) dan nama belakang (lastName) yang dipisah dengan karakter "-". Buatlah agar nama depan dan nama belakang tersebut menjadi terpisah.

// Catatan: DILARANG menggunakan method split atau regex.
// Gunakanlah metode string yang lain yang kalian ketahui.

var person1 = "bryan-fury"
var firstName1 =person1.substring(0,5);
var lastName1 =person1.substring(6);
console.log(firstName1) // output: abdul
console.log(lastName1) // output: alim

var person2 = "john-doe"
var firstName2 =person2.substring(0,4);
var lastName2 =person2.substring();
console.log(firstName2) // output: john
console.log(lastName2) // output: doe