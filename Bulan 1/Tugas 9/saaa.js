// Soal Nomor 1
// Mengubah Array menjadi objek
console.log("  ")
console.log("==== SOAL 1 ====")

var arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]

var objDaftarPeserta= {
    nama : arrayDaftarPeserta[0],
    jenisKelamin : arrayDaftarPeserta[1],
    hobi : arrayDaftarPeserta[2],
    tahunLahir : arrayDaftarPeserta[3]
}
console.log(objDaftarPeserta)

// Soal Nomor 2
// Membuat array of object
console.log("  ")
console.log("==== SOAL 2 ====")

var dataBuah = [
    {nama: "Nanas", warna: ["Kuning"], adaBijinya: "tidak", harga: 9000},
    {nama: "Jeruk", warna: ["Oranye"], adaBijinya: "ada", harga: 8000},
    {nama: "Semangka", warna: ["Hijau", "Merah"], adaBijinya: "ada", harga: 10000},
    {nama: "Pisang", warna: ["Kuning"], adaBijinya: "tidak", harga: 5000}
]
dataBuah.forEach(function(item){
    if (item.adaBijinya == "tidak"){
        console.log(item.nama)
    }
})

// Soal Nomor 3
// Membuat penambahan data object ke array melalui function
console.log("  ")
console.log("==== SOAL 3 ====")

function tambahDataFilm(namaFilm, durasiFilm, genreFilm, tahunFilm){
    var detailFilm = {
        nama : namaFilm,
        durasi : durasiFilm,
        genre : genreFilm,
        tahun : tahunFilm
    }
    dataFilm.push(detailFilm)
}
var dataFilm = []

tambahDataFilm("LOTR", "2 jam", "action", "1999")
tambahDataFilm("avenger", "2 jam", "action", "2019")
tambahDataFilm("spiderman", "2 jam", "action", "2004")
tambahDataFilm("juon", "2 jam", "horror", "2004")
console.log(dataFilm)

// Soal Nomor 4
// Mengelompokkan data
console.log("  ")
console.log("==== SOAL 4 ====")

var people =[
    {name: "John", job: "Programmer", gender: "male", age: 30},
    {name: "Sarah", job: "Model", gender: "female", age: 27},
    {name: "Jack", job: "Engineer", gender: "male", age: 25},
    {name: "Ellie", job: "Designer", gender: "female", age: 35},
    {name: "Danny", job: "Footballer", gender: "male", age: 30},
]

var dewasa = people.filter(function(item){
    // if (item.age > 29){
    //     if(item.gender == "male"){
    //         return item.name
    //     } else {
    //         return null
    //     }
    // } else {
    //     return null
    // }
    if(item.age > 29 && item.gender == "male"){
        return item.name 
    }
})
console.log(dewasa)

// Soal Nomor 5
// Rata rata usia
console.log("  ")
console.log("==== SOAL 5 ====")

var ageOfPeople = people.map(function(item){
    var usia = item.age
    return usia
})
function hitungMean(usiaPeople){
    var usia = usiaPeople
    var totalUsia = 0
    for (var i = 0; i < usia.length; i++){
        totalUsia += usiaPeople[i]
    }
    var ratarata = totalUsia / usia.length
    return ratarata
}
console.log(hitungMean(ageOfPeople))

// Soal Nomor 6
// Urutkan data
console.log("  ")
console.log("==== SOAL 6 ====")

function sortUsia(angka){
    angka.sort(function(a, b){return a-b});
    return angka
}

var sortPeople = people.map(function(item){
    var usia = item.age
    var nama = item.name
    var namaDanUsia = {name: nama, umur: usia}
    return namaDanUsia
})
sortPeople.sort((s1, s2)=>s1.umur-s2.umur).forEach(function(e, i){
    console.log((i+1) +". " + e.name) 
})

    


// Soal Nomor 7
// Menambahkan data ke property object
console.log("  ")
console.log("==== SOAL 7 ====")

var phone = {
    name: "Samsung Galaxy Note 20",
    brand: "Samsung",
    colors: ["Black"],
    release: 2020
}
  
function addColors(warna){
    phone.colors.push(warna)
}
  
addColors("Gold")
addColors("Silver")
addColors("Brown")
  
console.log(phone)
