// (Mengubah Array menjadi object) ubahlah array di bawah ini menjadi object dengan property nama, jenis kelamin, hobi dan tahun lahir (var arrayDaftarPeserta harus di olah menjadi object)
var arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]
var objDaftarPeserta= {
    nama: arrayDaftarPeserta[0],
    jenisKelamin: arrayDaftarPeserta[1],
    hobi: arrayDaftarPeserta[2],
    tahunLahir: arrayDaftarPeserta[3]
}
console.log(objDaftarPeserta)
console.log("============soal 2 ===================")
var buah = [
    {nama: "Nanas", warna: "Kuning", ada_bijinya: "tidak", harga: "9000" },
    {nama: "Jeruk", warna: "Oranye", ada_bijinya: "ada", harga: "8000" },
    {nama: "Semangka", warna: ["hijau","merah"], ada_bijinya: "ada", harga: "10000" },
    {nama: "Pisang", warna: "Kuning", ada_bijinya: "tidak", harga: "5000" },
 ]
var filterArray = buah.filter(function(data){
    return data.ada_bijinya === "ada"
})
console.log(filterArray);
console.log("============soal 3 ===================")
// (Membuat Penambahan Data object ke array melalui function)buatlah function tambahDataFilm yang menambahkan object ke array
function tambahDataFilm(judul, durasi, genre, tahun){
    var data = {judul, durasi, genre, tahun}
    return dataFilm.push(data);
}
var dataFilm = []

tambahDataFilm("LOTR", "2 jam", "action", "1999")
tambahDataFilm("avenger", "2 jam", "action", "2019")
tambahDataFilm("spiderman", "2 jam", "action", "2004")
tambahDataFilm("juon", "2 jam", "horror", "2004")
console.log(dataFilm)
console.log("============soal 4 ===================")
// kelompokkan data laki-laki yang umurnya diatas 29 (munculkan seluruh datanya)
var people =[
    {name: "John", job: "Programmer", gender: "male", age: 30},
    {name: "Sarah", job: "Model", gender: "female", age: 27},
    {name: "Jack", job: "Engineer", gender: "male", age: 25},
    {name: "Ellie", job: "Designer", gender: "female", age: 35},
    {name: "Danny", job: "Footballer", gender: "male", age: 30},
]
var filterpeople = people.filter(function(kelamin){
    return kelamin.gender === 'male' && kelamin.age > 29
})
console.log(filterpeople);
console.log("============soal 5 ===================")
var people =[
    {name: "John", job: "Programmer", gender: "male", age: 30},
    {name: "Sarah", job: "Model", gender: "female", age: 27},
    {name: "Jack", job: "Engineer", gender: "male", age: 25},
    {name: "Ellie", job: "Designer", gender: "female", age: 35},
    {name: "Danny", job: "Footballer", gender: "male", age: 30},
  ]
var sum = 0;
people.forEach(function(umur){
    sum += umur.age;
});
avrAge = sum / people.length;
console.log(avrAge);
console.log("============soal 6 ===================")
var people =[
    {name: "John", job: "Programmer", gender: "male", age: 30},
    {name: "Sarah", job: "Model", gender: "female", age: 27},
    {name: "Jack", job: "Engineer", gender: "male", age: 25},
    {name: "Ellie", job: "Designer", gender: "female", age: 35},
    {name: "Danny", job: "Footballer", gender: "male", age: 30},
  ]
people.sort(function(a,b){
  return a.age-b.age;
});
people.forEach(function(e, i){
    console.log((i+1) + "." + e.name);
})
console.log("============soal 7 ===================")
// (Menambahkan data ke property object) jika terdapat kode seperti dibawah ini
var phone = {
  name: "Samsung Galaxy Note 20",
  brand: "Samsung",
  colors: ["Black"],
  release: 2020
}
phone.colors.push('Gold', 'Silver', 'Brown')
console.log(phone)
//  function addColors(asalweh){
//     return phone.colors.push
// addColors("Gold")
// addColors("Silver")
// addColors("Brown")
// console.log(dasa)
