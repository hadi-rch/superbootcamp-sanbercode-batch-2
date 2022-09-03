function alayify(str) {
    var res = '';
    for (var i = 0; i < str.length; i++) {
      if (str[i] == str[i].toUpperCase()) {
        res += str[i].toLowerCase();
      } else if(str[i] == str[i].toLowerCase()) {
        res += str[i].toUpperCase();
      } else {
        res += str[i];
    }
}
console.log(res);
}

// TEST CASES
console.log(alayify("StateOfJS2021")) // sTATEoFjs2021 
console.log(alayify("I am N0t 4LaY")) // i AM n0t 4lAy
console.log(alayify("001-A-3-5TrdYW")) // "001-a-3-5tRDyw"

// -pertama kita siapkan function dengan nama alayify dengan satu parameter yaitu str.
// -siapkan variable res dengan nilai string kosong
// -lalu dengan mmengguankan for
// -lakukan iterasi berdasarkan panjangnya string
// -diawali dengan definisi variabel i bernilai 0 sebagai index pertama,
// -kemudian dilakukan pengecekan apakah nilai dari variabel i lebih kecil dari panjang string,
// -kemudian pada setiap iterasinya nilai i ditambah dengan 1 atau increment
// -kmudian masih pada iterasi tersebut dilakukan pengecekan 
// 	1.apakah string index sama dengan string index yang dirubah menjadi huruf kapital
// 		jika iya maka index tersebut akan dirubah menjadi huruf kecil dan di masukan kedalam variable res.
// 		jika tidak lanjut ke else if
// 	2.apakah string index sama dengan string index yang dirubah menjadi huruf kecil
// 		jika iya maka index tersebut akan dirubah menjadi huruf besar dan di masukan kedalam variable res.
// 		jika tidak lanjut ke else
// 	3.jika pengecekan 1 & 2 tidak berhasil maka index tersebut akan dikembalikan ke nilai awalnya

