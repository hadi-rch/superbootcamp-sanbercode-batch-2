var filterBooksPromise = require('./promise2.js')
 
async function bookFilter() {
    
}

// Lanjutkan code untuk menjalankan function filterBookPromise
async function execute(){
    filterBooksPromise(true, 50).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });
    try{
        const result1 = await filterBooksPromise(false, 250)
        console.log(result1)
        const result2 = await filterBooksPromise(true, 30)
        console.log(result2)
    }
    catch(err){console.log(err.message)
    }
}

execute()

