var longWords = ["Penelope", "Johny", "Aubumayang", "Czechoslovakia", "Slovenia"]
var longest = [];
for (var i = 0; i < longWords.length; i++) {
    if (longest.length < longWords[i].length) {
    longest = longWords[i];
  }
}

console.log(longest);
// var longWords = ["Penelope", "Johny", "Aubumayang", "Czechoslovakia", "Slovenia"],
//     sorted = longWords.sort(function (a, b) {
//     return a.length < b.length;
// });

// console.log(sorted);