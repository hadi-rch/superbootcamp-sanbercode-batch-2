// Currying Function
// Fungsi currying adalah teknik untuk mengubah bentuk suatu fungsi 
// dengan beberapa argumen menjadi sebuah fungsi anak yang berurutan.
// Fungsi currying akan mengembalikan fungsi baru yang sesuai dengan argumen berikutnya.
// Bentuknya seperti berikut ini:

function tambah (a, b){ 
   return a + b 
}

tambah(2, 5) // 7

// currying function
function tambah (a){
  return function(b){ 
    return a + b
  }
}


tambah(2)(5) // 7

// Apa manfaat mengubah menjadi bentuk ini? 
// contoh di atas memang terasa tidak bermanfaat kecuali hanya untuk memberikan contoh bentuk dasarnya.
// Teknik currying ini sangat berguna jika terdapat argumen dari fungsi itu yang membutuhkan komputasi berat. Misalnya:

// simulasi untuk komputasi berat
function getGreeting(){
    var x = 0
    for (i=0; i<1000000000; i++){
        x += i
    }
    return "Selamat pagi"
}

function say(callback, name) {
    var greeting = callback()
    console.log(greeting, name)
}

var users = ['Fuad', 'Hasan', 'Ismi', 'Budi', 'Azhar']

users.map(function(user) {
  return say(getGreeting, user)
})

/* waktu 6 detik
Selamat pagi Fuad
Selamat pagi Hasan
Selamat pagi Ismi
Selamat pagi Budi
Selamat pagi Azhar
*/

// Pada kode di atas, fungsi say dipanggil sebanyak jumlah user atau 6 kali, 
// di mana pada setiap iterasinya juga akan menjalankan 
// fungsi getGretting yang kita simulasikan sebagai komputasi berat. Hasilnya butuh waktu 6 detik.
// Mari kita ubah kode di atas menjadi bentuk currying.
// simulasi untuk komputasi berat
function getGreeting(){
  var x = 0
  for (i=0; i<1000000000; i++){
      x += i
  }
  return "Selamat pagi"
}

// ubah menjadi bentuk currying
function say(callback){
var greeting = callback()

return function(name){  
  console.log(greeting, name)
}
}

var users = ['Fuad', 'Hasan', 'Ismi', 'Budi', 'Azhar']

// say(getGreeting)(users[0])

// say(getGreeting)(users[1])

var sayGretting = say(getGreeting) // jalankan dulu

users.map(function (user) {
return sayGretting(user) 
})
// Pada kode di atas kita cukup menjalankan fungsi say yang berisi callback function 
// dengan komputasi berat cukup sekali saja. Kemudian fungsi sayGretting yang komputasinya ringan dipanggil 6 kali.
// Hasilnya haya butuh waktu 1,7 detik saja. Lebih efisien bukan?
