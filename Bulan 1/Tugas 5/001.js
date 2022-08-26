var sentence = "Saya Sangat Senang Sekali Belajar Programming dan Saya Juga Senang Belajar Javascript";
var panjang = sentence.length;
var qqq = "======================soal 1============================";
console.log(qqq);
if (panjang < 10){
    console.log("pendek")
}else if (panjang >10 && panjang <= 30){
    console.log("sedang")
}else{
    console.log("panjang")
}

var qqw = "======================soal 2============================";
console.log(qqw);
var nilai = 75
if (nilai <= 100 && nilai >= 80) {
    console.log('Nilai: A');
  } else if (nilai < 80 && nilai >= 70) {
    console.log('Nilai: B');
  } else if (nilai < 70 && nilai >= 60) {
    console.log('Nilai: C');
  } else if (nilai < 60 && nilai >= 50) {
    console.log('Nilai: D');
  } else if (nilai < 50 && nilai >= 0) {
    console.log('Nilai: E');
  } else {
    console.log('Nilai tidak valid');
  }

var qwe = "======================soal 3============================";
console.log(qwe);
var tanggal = 10;
var bulan = 4;
var tahun = 1999;
var thn = tahun.toString(); 
var tgl = tanggal.toString(); 

switch(bulan){
    case 1: {console.log(tgl +" "+ "Januari" +" "+ thn); break;}
    case 2: {console.log(tgl +" "+ "Februari" +" "+ thn); break;}
    case 3: {console.log(tgl +" "+ "Maret" +" "+ thn); break;}
    case 4: {console.log(tgl +" "+ "April" +" "+ thn); break;} 
    case 5: {console.log(tgl +" "+ "Mei" +" "+ thn); break;}
    case 6: {console.log(tgl +" "+ "Juni" +" "+ thn); break;}
    case 7: {console.log(tgl +" "+ "Juli" +" "+ thn); break;}
    case 8: {console.log(tgl +" "+ "Agustus" +" "+ thn); break;}
    case 9: {console.log(tgl +" "+ "September" +" "+ thn); break;}
    case 10: {console.log(tgl +" "+ "Oktober" +" "+ thn); break;}
    case 11: {console.log(tgl +" "+ "November" +" "+ thn); break;}
    case 12: {console.log(tgl +" "+ "Desember" +" "+ thn); break;}}
    
var qre = "======================soal 4============================";
console.log(qre);    
var lahir = 1999;
var tgllahir = 1922 && lahir <=1964 ? 'Baby boomer': lahir >= 1965 && lahir <=1979? 'Generasi X':
        lahir >= 1980 && lahir <=1994 ? 'Generasi Y': lahir >= 1995 && lahir <=2015? 'Generasi Z': 'Undifined';
console.log(tgllahir);

var qsw = "======================soal 5===========================";
console.log(qsw);
var pendapatan = 2500000;
var total =""
var jasa =""
var komisi = ""
if (pendapatan <=2000000 ,pendapatan){
    jasa =100000;
    komisi =1*pendapatan;
}else if(pendapatan > 5000000 && pendapatan <=10000000){  
    jasa =300000;
    komisi =3*pendapatan;
}else(pendapatan > 2000000 && pendapatan <=5000000);{
    jasa =200000;
    komisi =0.15*pendapatan;
}

total=komisi+jasa;
console.log('Pendapatan ' +total);
// console.log(komisi);
// console.log(jasa);
