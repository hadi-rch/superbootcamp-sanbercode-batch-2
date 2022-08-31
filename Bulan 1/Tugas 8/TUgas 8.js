console.log("=============soal 1 ===========================");
 function luasPersegiPanjang(a, b){
   return a * b;
 }
 function kelilingPersegiPanjang(a, b){
   return 2*(a + b);
 }
 function volumeBalok(a, b, c){
   return a * b * c;
 }
var panjang= 12
var lebar= 4
var tinggi = 8
var luasPersegiPanjang = luasPersegiPanjang(panjang, lebar);
var kelilingPersegiPanjang = kelilingPersegiPanjang(panjang, lebar);
var volumeBalok = volumeBalok(panjang, lebar, tinggi);

console.log(luasPersegiPanjang);
console.log(kelilingPersegiPanjang);
console.log(volumeBalok);

 console.log("=================== soal 2 ==================");
 //  (Introduce) Tulislah sebuah function dengan nama introduce() yang memproses paramater 
 // yang dikirim menjadi sebuah kalimat 
 function introduce(a,b,c,d){
     return "pak " + a + " adalah seorang " + c + " yang berusia " + d + " tahun"
    }
    
    var john = introduce("John", "laki-laki", "penulis", "30")
    console.log(john) // Menampilkan "Pak John adalah seorang penulis yang berusia 30 tahun"
    
    var sarah = introduce("Sarah", "perempuan", "model", "28")
    console.log(sarah) // Menampilkan "Bu Sarah adalah seorang model yang berusia 28 tahun"
    
console.log("=================== soal 3 ==================");
// (Karakter Unik) Buatlah function yang menerima parameter berupa string 
// (gunakan var text dibawah sebagai parameter) yang mencari karakter atau huruf yang tidak berulang
var text = "Super Bootcamp Fullstack Dev 2022"
function unik(str1)
{
 var str=str1;
 var uniql="";
 for (var x=0;x < str.length;x++)
 {
     
     if(uniql.indexOf(str.charAt(x))==-1)
     {
         uniql += str[x];  
         
        }
    }
    return uniql;  
}  
console.log(unik(text));
// expected output: rbmfkdv0


console.log("=================== soal 4 ==================");
// (Terbesar dan Terkecil) buatlah function yang menghasilkan angka terbesar dan angka terkecil 
// dari sebuah array yang berisi data integer (gunakan var angka dibawah sebagai parameter)
var angka = [2,3,1,9,12,8,9,7]
angka.sort(function(a,b){
    return a-b;
});
var angkaTerkecil=angka[0];
var angkaTerbesar = angka[angka.length -1];
console.log("angka terbesar adalah " + angkaTerbesar + " dan angka terkecil adalah " + angkaTerkecil );
// expected output: angka terbesar adalah 12 dan angka terkecil adalah 1
console.log("=================== soal 5 ==================");
// (Nama Besar) Buatlah function yang menentukan kata apa yang terpanjang dari 
// kumpulan data string (gunakan var names dibawah sebagai parameter)
var names = ["John D Rockefeller", "Andrew Gillett", "Chris Sawyer", "David Walsh"]
var longnames = [];
for (var i = 0; i < names.length; i++) {
    if (longnames.length < names[i].length) {
    longnames = names[i];
  }
}
console.log(longnames);

console.log("=================== soal 6 ==================");
// (Arrange String) Buatlah function untuk menyusun karakter pada string secara alfabetis. 
function arrangeString (str) {
        return str.split("").sort().join("");
    };
    // TEST CASE 
    console.log(arrangeString("bahasa")) // Output : aaabhs
    console.log(arrangeString("similikiti")) // Output : iiiiiklmst
    console.log(arrangeString("sanbercode")) // Output : abcdeenors 
    console.log(arrangeString("")) // Output : ""

    console.log("=================== soal 7 ==================");
var outputArray = [];
var count = 1;
var outputString = "";
function countFilter(count) {
      if(count === 1) {
    return ''
} else {
    return count
}
}
function compressString(string){
    for(var i=0; i<string.length; i++) {
        var curr = string[i];
    var next = string[i+1];
    if (curr !== next) {
      outputString += curr + countFilter(count)
      count = 1
      }    else { count++ }
      }
      return outputString
        }
        
console.log(compressString("abrakadabra")) // a5b2d1k1r2
console.log(compressString("aabcccccaaa")) // a5b1c5
console.log(compressString("abdul")) // abdlu 
console.log(compressString("maman")) // aamn


console.log("=================== soal 8 ==================");
function palindrome(kata) {  
    var arrValue = kata.split (''); // mengubah string menjadi array menggunakan fungsi string.split()    
    var reveArrVal = arrValue.reverse();   // gunakan metode reverse() untuk membalikkan nilai array  
    var revString = reveArrVal.join('');  // gunakan metode join() untuk mengelompokkan nilai array ke dalam string  
    
    if (kata == revString)  {  
        return('true'); 
    }else {  
return('false'); 
}  
}  
// var value = palindrome("asssdsa");
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('nababan')); // true
console.log(palindrome('haji ijah')); // true
console.log(palindrome('mister')); // false
console.log("=================== soal 9 ==================");
function angkaPalindrome(num) {
    for(var i=0; i<num; i++){
        num++;
        var numString = String(num);
        var len = numString.length;
        var string = '';
        for(var j=len-1; j>=0; j--){
          string += numString[j];
        }
        if(numString === string){
          return num
        }
      }
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001


console.log("=================== soal 10 ==================");
function pasanganTerbesar(num) {
    var numBaru = ""
    numBaru = numBaru + num
    var max = numBaru[0] + numBaru[1]
    for (var i = 1; i <= numBaru.length; i++) {
        var maxBaru = numBaru[i] + numBaru[i + 1]
        if (max <= maxBaru) {
            max = maxBaru
        } else {
        }
    } return parseInt(max)
}
console.log(pasanganTerbesar(641573));
console.log(pasanganTerbesar(12783456));
console.log(pasanganTerbesar(910233));
console.log(pasanganTerbesar(71856421));
console.log(pasanganTerbesar(79918293)); 

console.log("=================== soal 11 ==================");
var permArr = [], usedChars = [];
function permute(input) {
  var i, ch, chars = input.split("");
  for (i = 0; i < chars.length; i++) {
    ch = chars.splice(i, 1);
    usedChars.push(ch);
    if (chars.length == 0)
      permArr[permArr.length] = usedChars.join("");
    permute(chars.join(""));
    chars.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr.join(",")
};
console.log(permute('abah'));//satu parameter
// console.log(cekPermutasi("abah", "baha")) // true
// console.log(cekPermutasi("ondel", "delon")) // true
// console.log(cekPermutasi("paul sernine", "arsene lupin")) // true
// console.log(cekPermutasi("taco", "taca") // false

console.log("=================== soal 12 ==================");
function urlify(huruf, angka){
    var string = huruf.split('');
    var spaceCount=0;
    for(var i=0; i<=trueLength;i++){
        if(string[i]==" "){
            spaceCount = spaceCount+1;
        }
    }
    var index = trueLength + (spaceCount*2);
    for(var i=trueLength; i>=0; i--){
        if(string[i]==" "){
            string[index]='0';
            string[index-1]='2';
            string[index-2]= '%';
            index = index-3;
        }
        else{
            string[index]=string[i];
            index = index-1;

        }
    }
     return string.join('');

}
var trueLength = 13;

console.log(urlify("Mr John Smith    ", 13)); // Mr%20John%20Smith
console.log(urlify("Bizzare world of Javascript     ", 27)); // Bizzare%20world%20of%20Javascript

