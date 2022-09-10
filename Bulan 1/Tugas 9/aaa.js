// Membuat Array of Object) anda diberikan data-data buah seperti di bawah ini

// 1.nama: Nanas
//   warna: Kuning
//   ada bijinya: tidak
//   harga: 9000 
// 2.nama: Jeruk
//   warna: Oranye
//   ada bijinya: ada
//   harga: 8000
// 3.nama: Semangka
//   warna: Hijau & Merah
//   ada bijinya: ada
//   harga: 10000
// 4.nama: Pisang
//   warna: Kuning
//   ada bijinya: tidak
//   harga: 5000
// uraikan data tersebut menjadi array of object dan munculkan data yang tidak memiliki biji

//  var buah = [
//     {nama: "Nanas", warna: "Kuning", ada_bijinya: "tidak", harga: "9000" },
//     {nama: "Jeruk", warna: "Oranye", ada_bijinya: "ada", harga: "8000" },
//     {nama: "Semangka", warna: ["hijau","merah"], ada_bijinya: "ada", harga: "10000" },
//     {nama: "Pisang", warna: "Kuning", ada_bijinya: "tidak", harga: "5000" },
//  ]
// var filterArray = buah.filter(function(data){
//     return data.ada_bijinya === "ada"
// })
// console.log(filterArray);

var people = [{name:"John",number:"100"}, 
              {name: "Susan",number: "100"}, {name:"Karen",number: "100"}];
  
  var sum = 0;
  people.forEach(function(item) {
    sum += parseFloat(item.number);
  });
  
  
  average = sum / people.length;
  console.log(average);