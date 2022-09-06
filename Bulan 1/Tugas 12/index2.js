var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
var bacaBuku = 10000
function execute(waktuBaca, i = 0){
    readBooksPromise(waktuBaca, books[i]).then(function(waktuBaca1){
        if (waktuBaca1 >= 0){
            execute(waktuBaca1, i+1)
        }
    }).catch(function(){
    })
}

execute(bacaBuku)
