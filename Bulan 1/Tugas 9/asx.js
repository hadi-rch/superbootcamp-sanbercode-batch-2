function tambahDataFilm(judul, durasi, genre, tahun){
    var data = {judul, durasi, genre, tahun}
    return dataFilm.push(data);
}

var dataFilm = []
tambahDataFilm("LOTR", "2 jam", "action", "1999")
tambahDataFilm("avenger", "2 jam", "action", "2019")
tambahDataFilm("spiderman", "2 jam", "action", "2004")
tambahDataFilm("juon", "2 jam", "horror", "2004")
console.log(dataFilm);


var arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]
var objDaftarPeserta= {
    nama: arrayDaftarPeserta[0],
    jenisKelamin: arrayDaftarPeserta[1],
    hobi: arrayDaftarPeserta[2],
    tahunLahir: arrayDaftarPeserta[3]
}
console.log(objDaftarPeserta)
