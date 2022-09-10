// function tambahDataFilm(judul, durasi, genre, tahun){
//     var data = {judul, durasi, genre, tahun}
//     return dataFilm.push(data);
// }
// var dataFilm = []

// tambahDataFilm("LOTR", "2 jam", "action", "1999")
// tambahDataFilm("avenger", "2 jam", "action", "2019")
// tambahDataFilm("spiderman", "2 jam", "action", "2004")
// tambahDataFilm("juon", "2 jam", "horror", "2004")
// console.log(dataFilm)

function tambahDataFilm(judul, durasi, genre, tahun){
    this.judul =judul;
    this.durasi = durasi;
    this.genre = genre;
    this.tahun = tahun;
}
var wkwk = new tambahDataFilm("LOTR", "2 jam", "action", "1999");
console.log(tambahDataFilm);