var permArr = [], usedChars = [];
function permute(inputa, inputb) {
  var i, ch, chars = inputa.split("");
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
{
    var i, ch, chars = inputb.split("");
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

console.log(permute('gas','sag'));