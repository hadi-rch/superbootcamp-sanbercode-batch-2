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