var kata1 = "ASBDAOPWQC"
var kata2 = "PQWEQWEQPWEQOPSPASSACAERYQ"
var kata3 = "ADDLKSKLJKLOADADC"
var kata4 = "LPASIDDPOLSHDCDSF"

var word1 = kata1.substring(1,6);
var word1q = kata1.substring(5,10);
var word1a = word1.length;
var word1w = word1q.length;

var word2 = kata2.substring(12,15);
var word2q = kata2.substring(12,21);
var word2a = word2.length;
var word2w = word2q.length;
console.log(word2w);
console.log(word2a);

var word3 = kata3.substring(5,12);
var word3q = kata3.substring(11,17);
var word3a = word3.length;
var word3w = word3q.length;
// console.log(word3a);
// console.log(word3w);

var word4 = kata4.substring(3,9);
var word4q = kata4.substring(8,14);
var word4a = word4.length;
var word4w = word4q.length;
console.log(word4w);
console.log(word4a);


    if (word1.length == word1q.length){
        console.log("bener")
        if (word2.length != word2q.length){
            console.log("salah")
            if (word3.length != word3q.length){
                console.log("salah")
                if (word4.length == word4q.length){
                    console.log("bener")
}}}
else{
    console.log("salah woi")
}}


// console.log(word4w);
// if (word3w == word3a) {
//     console.log("bener")
// } else{
//     console.log("salah")
// }
// if (word1w == word1a){
//     console.log("benar")
// }else{
//     console.log("panjang")
// }
// if (word2w == word2a){
//     console.log("benar")
// }else{
//     console.log("panjang")
// }
// if (word3w == word3a){
//     console.log("benar")
// }else{
//     console.log("panjang")
// }
// if (word4w == word4a){
//     console.log("benar")
// }else{
//     console.log("panjang")
// }




// if (word1a==word1w) {
//     console.log("yes, i will help you to code")
//     if (word2a==word2w){
//         console.log("yhsfhsdh")
//         if (word3a==word3w){
//             console.log("yeswetwretwe")
//             if (word4a==word4w){
//                 console.log("yes, i will helweyweyweu to code")
//             }
//         }
//     }
// }else {
//     console.log("continue with your code")
// }

// var minimarketStatus = "open"
// var telur = "soldout"
// var buah = "soldout" 
// if ( minimarketStatus == "open" ) {
//     console.log("saya akan membeli telur dan buah")
//     if(telur == "soldout" || buah == "soldout" ) {
//         console.log("belanjaan saya tidak lengkap")    
//     } else if( telur == "soldout") {
//         console.log("telur habis")
//     } else if ( buah == "soldout" ) {
//         console.log("buah habis")
//     }
// } else {
//     console.log("minimarket tutup, saya pulang lagi")
// }