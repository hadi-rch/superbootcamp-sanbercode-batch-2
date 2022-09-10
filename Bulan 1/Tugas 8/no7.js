// const compressString = (s1) => {
//     let charMap = new Map();
    
//     for(let i=0; i<s1.length; i++){
//       charMap.set(s1[i], charMap.get(s1[i]) + 1 || 1);
//     }
    
//     let s = '',
//         mapKeys = charMap.keys(),
//         mapValues = charMap.values();
//     charMap.forEach(function(value, key, map){
//       s += key+value;
//     });
    
//     return s;
//   }
  
function countFilter(count) {
          if(count === 1) {
        return ''
    } else {
        return count
    }
    } 

//   let a = 'aaabbccccaa';
//   console.log(compressString(a));
var str1 = 'wwwaayhuhgbhjkhhhhijhhbbbb';
var str2 = 'kvgvffffrtfkkkj';
var str3 = 'aab';
let res = '';
let count = 1;
function compressString(str) {
   for(let i = 0; i < str.length; i++){
      let cur = str[i];
      let next = str[i + 1];
      if(cur === next){
         count++;
      }else{
         res += cur + countFilter(count);
         count = 1;
      };
   }
   return res.length < str.length ? res : str;
};
console.log(compressString(str1));
console.log(compressString(str2));
console.log(compressString(str3));
