function updateKlasemen(currentStandings) {
    for (i = 0; i < hasilBalapanMandalika.length; i++) {
        if (hasilBalapanMandalika[i].position === 1){
            reklas.push(hasilBalapanMandalika[i][{points : 25}])
            reklas.push({points : 25})
            console.log(reklas)
        // }
        // if (hasilBalapanMandalika[i].position === 2){
        //     reklas.push(hasilBalapanMandalika[i])
        //     reklas.push({points : 20})
        // }
        // if (hasilBalapanMandalika[i].position === 3){
        //     reklas.push(hasilBalapanMandalika[i])
        //     reklas.push({points : 16})
        // }
        // if (hasilBalapanMandalika[i].position === 4){
        //     reklas.push(hasilBalapanMandalika[i])
        //     reklas.push({points : 13})
        // }
        // if (hasilBalapanMandalika[i].position === 5){
        //     reklas.push(hasilBalapanMandalika[i])
        //     reklas.push({points : 11})
        // }
        // if (hasilBalapanMandalika[i].position === 6){
        //     reklas.push(hasilBalapanMandalika[i])
        //     reklas.push({points : 10})
        // }
        // if (hasilBalapanMandalika[i].position === 7){
        //     reklas.push(hasilBalapanMandalika[i])
        //     reklas.push({points : 9})
        // }
        // if (hasilBalapanMandalika[i].position === 8){
        //     reklas.push(hasilBalapanMandalika[i])
        //     reklas.push({points : 8})
        // }
        // if (hasilBalapanMandalika[i].position === 9){
        //     reklas.push(hasilBalapanMandalika[i])
        //     reklas.push({points : 7})
        // }
        // if (hasilBalapanMandalika[i].position === 10){
        //     reklas.push(hasilBalapanMandalika[i])
        //     reklas.push({points : 6})
        // }
        // if (hasilBalapanMandalika[i].position === 11){
        //     reklas.push(hasilBalapanMandalika[i])
        //     reklas.push({points : 5})
        // }
        // if (hasilBalapanMandalika[i].position === 12){
        //     reklas.push(hasilBalapanMandalika[i])
        //     reklas.push({points : 4})
        // }
        // if (hasilBalapanMandalika[i].position === 13){
        //     reklas.push(hasilBalapanMandalika[i])
        //     reklas.push({points : 3})
        // }
        // if (hasilBalapanMandalika[i].position === 14){
        //     reklas.push(hasilBalapanMandalika[i])
        //     reklas.push({points : 2})
        // }
        // if (hasilBalapanMandalika[i].position === 15){
        //     reklas.push(hasilBalapanMandalika[i])
        //     reklas.push({points : 1})
        // 
        }else{
            reklas.push(hasilBalapanMandalika[i])
            reklas.push({points : 16})
        }


        }
    }

// console.log(reklas)

var reklas =[]
// TEST CASE
var klasemenTerakhir = [
    { name: "Enea Bastianini",  constructor: "Ducati", points:  25 },
    { name: "Brad Binder",  constructor: "KTM", points:  20 },
    { name: "Pol Espargaro",  constructor: "Honda", points:  16 },
    { name: "Aleix Espargaro",  constructor: "Aprilia", points:  13 },
    { name: "Marc Marquez",  constructor: "Honda", points:  11 },
    { name: "Joan Mir",  constructor: "Suzuki", points:  10 },
    { name: "Alex Rins",  constructor: "Suzuki", points:  9 },
    { name: "Johann Zarco",  constructor: "Ducati", points:  8 },
    { name: "Fabio Quartararo",  constructor: "Yamaha", points:  7 },
    { name: "Takaaki Nakagami",  constructor: "Honda", points:  6 },
    { name: "Franco Morbidelli",  constructor: "Yamaha", points:  5 },
    { name: "Maverick Vinales",  constructor: "Aprilia", points:  4 },
    { name: "Luca Marini",  constructor: "Ducati", points:  3 },
    { name: "Andrea Dovizioso",  constructor: "Yamaha", points:  2 },
    { name: "Remy Gardner",  constructor: "KTM", points:  1 },
    { name: "Darryn Binder",  constructor: "Yamaha", points:  0 },
    { name: "Fabio di Giannantonio",  constructor: "Ducati", points:  0 },
    { name: "Raul Fernandez",  constructor: "KTM", points:  0 },
    { name: "Alex Marquez", constructor: "Honda", points: 0},
    { name: "Francesco Bagnaia", constructor: "Ducati", points: 0 },
    { name: "Miguel Oliveira", constructor: "KTM", points: 0 },
    { name: "Marco Bezzechi", constructor: "Ducati", points: 0 },
    { name: "Jorge Martin", constructor: "Ducati", points: 0 },
    { name: "Jack Miller", constructor: "Ducati", points: 0 }
]

var hasilBalapanMandalika = [
    { "position": 1, name: "Miguel Oliveira", constructor: "KTM" },
    { "position": 2, name: "Fabio Quartararo", constructor: "Yamaha" }, 
    { "position": 3, name: "Johann Zarco", constructor: "Ducati" }, 
    { "position": 4, name: "Jack Miller", constructor: "Ducati" }, 
    { "position": 5, name: "Alex Rins", constructor: "Suzuki" }, 
    { "position": 6, name: "Joan Mir", constructor: "Suzuki" }, 
    { "position": 7, name: "Franco Morbidelli", constructor: "Yamaha" }, 
    { "position": 8, name: "Brad Binder", constructor: "KTM" }, 
    { "position": 9, name: "Aleix Espargaro", constructor: "Aprilia" },
    { "position": 0, name: "Darryn Binder", constructor: "Yamaha" },
    { "position": 11, name: "Enea Bastianini", constructor: "Ducati" },
    { "position": 12, name: "Pol Espargaro", constructor: "Honda" },
    { "position": 13, name: "Alex Marquez", constructor: "Honda" },
    { "position": 14, name: "Luca Marini", constructor: "Ducati" },
    { "position": 15, name: "Francesco Bagnaia", constructor: "Ducati" },
    { "position": 16, name: "Maverick Vinales", constructor: "Aprilia" },
    { "position": 17, name: "Raul Fernandez", constructor: "KTM" },
    { "position": 18, name: "Fabio di Giannantonio", constructor: "Ducati" },
    { "position": 19, name: "Takaaki Nakagami", constructor: "Honda" },
    { "position": 20, name: "Marco Bezzechi", constructor: "Ducati" },
    { "position": 21, name: "Remy Gardner", constructor: "KTM" },
    { "position": 22, name: "Jorge Martin", constructor: "Ducati" },
    { "position": 23, name: "Andrea Dovizioso", constructor: "Yamaha" }
]

console.log(updateKlasemen(hasilBalapanMandalika))
// console.log(updateKlasemen(klasemenTerakhir, hasilBalapanMandalika))