var inputString3 = "sqqibbbbleeeee";
var outputArray = [];
var count = 1;
var outputString = "";
function countFilter(count) {
      if(count === 1) {
    return '1'
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
          return outputString}
    
console.log(compressString(inputString3))