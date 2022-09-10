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
var result = urlify("Mr John Smith         ", 66);
console.log(result);
// In JS it can be done by using the replace method as:  
// var string = "Mr John Smith ";
// var result=string.replace(/\s/g,'%20');
// console.log(result);