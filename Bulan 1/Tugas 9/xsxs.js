var result = {};
var atasd = ["John Doe", "laki-laki", "baca buku" , 1992];
    // var arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]

atasd.forEach(function(prop,index) {
  result[index] = prop;
});
// attributes.forEach((prop,index)=>result[index] = prop);
console.log(result);



// nama.forEach(function(e, i){
//     console.log('Mahasiswa ke-' + (i+1) + 'adalah : ' + e);
// })