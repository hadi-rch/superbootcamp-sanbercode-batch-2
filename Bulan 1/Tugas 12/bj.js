var filterCarsPromise = require('./promise3.js')
 

async function execute(){
    filterCarsPromise("black", 2019)
        .then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
    filterCarsPromise("silver", 2017)
        .then((result2) => {
            console.log(result2);
        }).catch((err) => {
            console.log(err);
        });
    try{
        let result3 = await filterCarsPromise("grey", 2019)
        console.log(result3)
    }
    catch(err){
        console.log(err.message)
        let result4 = await filterCarsPromise("grey", 2018)
        console.log(result4)
        let result5 = await filterCarsPromise("black", 2020)
        console.log(result5)
    }
}
execute()
