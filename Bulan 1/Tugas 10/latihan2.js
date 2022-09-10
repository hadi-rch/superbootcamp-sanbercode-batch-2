// First-class Function
// First-class function maksudnya adalah menjadikan fungsi layaknya class 
// atau dalam hal ini kita bisa mendeklarasikan fungsi di dalam fungsi yang lain. Contoh:

function HitungLingkaran(radius) {
    var pi = 22/7

    function luas (r){return pi * r * r} 
    function keliling (r){return 2 * pi * r }
    console.log("Luas:", luas(radius))
    console.log("Keliling:",keliling(radius))
}

HitungLingkaran(7)
/*
Luas: 154
Lebar: 44
*/