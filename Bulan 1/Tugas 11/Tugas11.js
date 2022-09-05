console.log("==============soal 1 ========================")
let hitungLingkaran = (jariJari) => {
    const phi = 3.14;
    function luasLingkaran(jar) {return phi*jar**2}
    function kelilingLingkaran(jar) {return 2*phi*jar}
    console.log("Luas Lingkaran : ",luasLingkaran(jariJari))
    console.log("Keliling Lingkaran : " ,kelilingLingkaran(jariJari));
}
hitungLingkaran(10);


console.log("==============soal 2 ========================")
const introduce = (...rest) => {
    let [kata1, kata2, kata3, kata4]= rest
    var prefix = kata3 === "Laki-Laki" ? "Pak" : (kata3 === "Perempuan" ? "Bu" : "")
    
return `${prefix} ${kata1} adalah seorang ${kata4} yang berusia ${kata2}`
}

//kode di bawah ini jangan dirubah atau dihapus
const perkenalanJohn = introduce("john", "30", "Laki-Laki", "penulis")
console.log(perkenalanJohn) // Menampilkan "pak john adalah seorang penulis yang berusia 30 tahun"

//kode di bawah ini jangan dirubah atau dihapus 
const perkenalanSarah = introduce("sarah", "28", "Perempuan", "guru") 
console.log(perkenalanSarah) // Menampilkan "bu sarah adalah seorang penulis yang berusia 30 tahun"

console.log("==============soal 3 ========================")
const newFunction = (firstName, lastName)=>{
    return {
        firstName,
        lastName,
        fullName: function(){
            console.log(firstName + " " + lastName)
        }
    }
}

// kode di bawah ini jangan diubah atau dihapus sama sekali
console.log(newFunction("John", "Doe").firstName)
console.log(newFunction("Richard", "Roe").lastName)
newFunction("William", "Imoh").fullName()

console.log("==============soal 4 ========================")
let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020,
    colors: ["Mystic Bronze", "Mystic White", "Mystic Black"]
 }
 // kode diatas ini jangan di rubah atau di hapus sama sekali
 
 const {name:phoneName,brand:phoneBrand,year,colors} = phone
var colorBlack = phone.colors[2];
var colorBronze = phone.colors[0];
 
// kode di bawah ini jangan dirubah atau dihapus
console.log(phoneBrand, phoneName, year, colorBlack, colorBronze) 
//  tuliskan kode jawaban yang berisi hasil destructuring yang nantinya akan di gunakan dalam console.log 
 
  
console.log("==============soal 5 ========================")
let warna = ["biru", "merah", "kuning" , "hijau"]

let dataBukuTambahan= {
    penulis: "john doe",
    tahunTerbit: 2020 
}

let buku = {
    nama: "pemograman dasar",
    jumlahHalaman: 172,
    warnaSampul:["hitam"]
}
// kode diatas ini jangan di rubah atau di hapus sama sekali

buku.warnaSampul = [...buku.warnaSampul, ...warna]
let newBuku = {
    ...buku,
    ...dataBukuTambahan
}

console.log(newBuku)
// gabungkanlah variabel warna (gabungkan dengan atribut warnaSampul) 
// dan dataBukuTambahan ke variabel buku dengan menggunakan spread operator


console.log("==============soal 6 ========================")
const addProducts = (produk, newProduct) => {
    produk.products = [...produk.products, ...newProduct]
    return produk.products
}
let samsung ={
    name: "Samsung",
    products :[
        {name: "Samsung Galaxy Note 10", colors: ["black", "gold", "silver"]},
     {name: "Samsung Galaxy Note 10s", colors: ["blue", "silver"]},
     {name: "Samsung Galaxy Note 20s", colors: ["white", "black"]}
    ] 
   }
   
   let newProducts = [
    {name: "Samsung Galaxy A52", colors: ["white", "black"]},
    {name: "Samsung Galaxy M52", colors: ["blue", "grey", "white"]}
   ]
   
   samsung = addProducts(samsung, newProducts)
   
   console.log(samsung)
   //    buatlah sebuah function yang menambahkan dari newProducts

console.log("==============soal 7 ========================")
// Buatlah sebuah function (dengan arrow function) di dalam file 007.js . 
// function tersebut menerima tiga parameter yang pertama adalah nama, yang kedua adalah domisili, 
// dan yang ketiga adalah umur. Function akan mengolah parameter menjadi object literal. 
// Gunakanlah fitur ES6 berikut ini: Destructuring array, enhanced object Literal, dan arrow function. 

// Test Case 

let data = ["Bondra", "Medan", 25]
const [nama, domisili, umur] = data  
const dataNew = {nama, domisili, umur}
const newData = (a) => {
    console.log(a)
}
newData(dataNew)

console.log("==============soal 8 ========================")
// Buatlah sebuah function graduate yang bisa menerima banyak parameter 
// berupa data kumpulan siswa dan kelasnya. function akan mengembalikan 
// sebuah object yang memfilter data input sesuai dengan kelompok kelas. 
// Gunakan fitur ES6 berikut : Rest parameter, spread operator, arrow function
// TEST CASES
 const data1 = [
  { name: "Ahmad", class: "adonis"},
  { name: "Regi", class: "laravel"},
  { name: "Bondra", class: "adonis"},
  { name: "Iqbal", class: "vuejs" },
  { name: "Putri", class: "laravel" }
]

const data2 = [
  { name: "Yogi", class: "react"},
  { name: "Fikri", class: "agile"},
  { name: "Arief", class: "agile"}
]
 const graduate = (s) = {
    
 }

console.log(graduate(data1))
// Output 
// {
//   "adonis": [ "Ahmad", "Bondra" ],
//   "laravel": [" Regi", "Putri"], 
//   "vuejs": ["Iqbal"]
// }

console.log(graduate(data2)) 
// Output
// {
//   "react": ["Yogi"],
//   "agile": ["Fikri", "Arief"]
// }
