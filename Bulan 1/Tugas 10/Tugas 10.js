// (Hitung Bangun Datar)  buatlah function perhitungan bangun datar berdasarkan 
// kode dibawah yang didalamnya ada function luas dan keliling terapkan first class function pada soal ini
function hitungPersegi(sisi) {
    function luas (s) {return s*s}
    function keliling (s) {return s+s}
    console.log("Luas Persegi:", luas(sisi))
    console.log("Keliling Persegi:",keliling(sisi))
}
function hitungPersegiPanjang(panjang,lebar) {
    function luas (p,l) { return p*l}
    function keliling (p,l) { return p+l}
    console.log("Luas Persegi Panjang:", luas(panjang,lebar))
    console.log("Keliling Persegi Panjang:",keliling(panjang,lebar))

}
hitungPersegi(8)
hitungPersegiPanjang(12,7)

console.log("===========================soal 2 ================================")
// (Hitung Bangun Ruang)  buatlah function perhitungan bangun ruang berdasarkan kode dibawah 
// yang didalamnya ada function volume dan luas permukaan terapkan first class function pada soal ini
function hitungKubus(sisi){
    function volumeKubus(s) {return s**3}
    function luasPermukaanKubus(s) {return 6*s**2}
    console.log("Volume Kubus:", volumeKubus(sisi))
    console.log("Luas Permukaan Kubus:", luasPermukaanKubus(sisi))
}
function HitungBalok(panjang,lebar,tinggi){
    function volumeBalok(p,l,t) {return p*l*t}
    function luasPermukaanBalok(p,l,t) {return 2*(p*l + p*t + l*t)}
    console.log("Volume Balok:", volumeBalok(panjang,lebar,tinggi))
    console.log("Luas Permukaan Balok:", luasPermukaanBalok(panjang,lebar,tinggi))
}
hitungKubus(8)
HitungBalok(12,7, 5)

console.log("===========================soal 3 ================================")
var people =[
    {name: "John", job: "Programmer", gender: "male", age: 30},
    {name: "Sarah", job: "Model", gender: "female", age: 27},
    {name: "Jack", job: "Engineer", gender: "male", age: 25},
    {name: "Ellie", job: "Designer", gender: "female", age: 35},
    {name: "Danny", job: "Footballer", gender: "male", age: 30}, ]
function ageSort(index){
    if (index < people.length){
        people.sort(function(a,b){
            if (a.age > b.age) return 1;
            if (a.age < b.age) return -1;
            // return 0;
            } )
        people.forEach(function(item,index) {
        return console.log(index+1 +" ."+ item.name)
        ageSort(index+1);
            })}}
    ageSort(0);

console.log("===========================soal 4 ================================")
// tampilkan data phones yang memiliki warna black dan dan urutkan berdasarkan tahun terkecil hingga terbesar
// lalu tampilkan namanya saja dengan recursive function dan tampilkan colors nya juga

var phones=[
    {name: "Samsung Galaxy A52", brand: "Samsung", year: 2021, colors: ["black", "white"]},
    {name: "Redmi Note 10 Pro", brand: "Xiaomi", year: 2021, colors: ["white", "blue"]},
    {name: "Redmi Note 9 Pro", brand: "Xiaomi", year: 2020, colors: ["white", "blue", "black"]},
    {name: "Iphone 12", brand: "Apple", year: 2020, colors: ["silver", "gold"]},
    {name: "Iphone 11", brand: "Apple", year: 2019, colors: ["gold", "black", "silver"]},
]
function addkolor(index){
    if (index < phones.length) {
        if (phones[index].colors.find(function(d){
            return d.colors == ("black")}));
        {
            phones.sort(function(a,b){
                if (a.year > b.year) return 1;
                if (a.year < b.year) return -1;
                return 0;
            } )
            // if (phones[index].colors.indexOf("black") === -1) {
            phones.forEach(function(item,index,asale) {
            return console.log(index+1 +" ."+ item.name + " "+ phones[index].colors) ;
            // addkolor(index+1);
        })
    }
    // addkolor(index +1)
}

}
addkolor(0)
// console.log(phones)

console.log("===========================soal 5 ================================")
var phones=[
    {name: "Samsung Galaxy A52", brand: "Samsung", year: 2021, colors: ["black", "white"]},
    {name: "Redmi Note 10 Pro", brand: "Xiaomi", year: 2021, colors: ["white", "blue"]},
    {name: "Redmi Note 9 Pro", brand: "Xiaomi", year: 2020, colors: ["white", "blue", "black"]},
    {name: "Iphone 12", brand: "Apple", year: 2020, colors: ["silver", "gold"]},
    {name: "Iphone 11", brand: "Apple", year: 2019, colors: ["gold", "black", "silver"]},
  ]
function addBrown(index){
    if (index < phones.length) {
        if (phones[index].year >= 2020) {
            phones[index].colors.push("brown")
        }
        addBrown(index +1)
    }
}
addBrown(0)
console.log(phones) 
// berdasarkan data phones diatas isilah tambahan colors brown untuk data 
// phones yang dirilis tahun 2020 atau lebih
