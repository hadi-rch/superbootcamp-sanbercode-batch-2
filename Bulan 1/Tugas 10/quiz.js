// var products = [
//     {id:1, name:'buku', qty:7, price:7000},
//     {id:2, name:'pensil', qty:2, price:4000},
//     {id:3, name:'rautan', qty:1, price:2000},
//     {id:4, name:'bulpoin', qty:10, price:2000},
//     {id:5, name:'penggaris', qty:2, price:2000},
//   ]
//   /* Imperative Pattern */
//   var restock = []
//   for (i = 0; i < klasemen.length; i++) {
//       if (klasemen[i].points < 40) {
//           kelas.push(klasemen[i])
//       }
//   }
//   console.log(restock)
var kleas =[]
var klasemen =[
    { name: "Enea Bastianini",  constructor: "Ducati", points:  30 },
    { name: "Brad Binder",  constructor: "KTM", points:  28 },
    { name: "Pol Espargaro",  constructor: "Honda", points:  20 },
    { name: "Aleix Espargaro",  constructor: "Aprilia", points:  20 },
    { name: "Marc Marquez",  constructor: "Honda", points:  11 },
    { name: "Joan Mir",  constructor: "Suzuki", points:  20 },
    { name: "Alex Rins",  constructor: "Suzuki", points:  20 },
    { name: "Johann Zarco",  constructor: "Ducati", points:  24 },
    { name: "Fabio Quartararo",  constructor: "Yamaha", points:  27 },
    { name: "Takaaki Nakagami",  constructor: "Honda", points:  6 },
    { name: "Franco Morbidelli",  constructor: "Yamaha", points:  14 },
    { name: "Maverick Vinales",  constructor: "Aprilia", points:  4 },
    { name: "Luca Marini",  constructor: "Ducati", points:  5 },
    { name: "Andrea Dovizioso",  constructor: "Yamaha", points:  2 },
    { name: "Remy Gardner",  constructor: "KTM", points:  1 },
    { name: "Darryn Binder",  constructor: "Yamaha", points:  6 },
    { name: "Fabio di Giannantonio",  constructor: "Ducati", points:  0 },
    { name: "Raul Fernandez",  constructor: "KTM", points:  0 },
    { name: "Alex Marquez", constructor: "Honda", points: 3},
    { name: "Francesco Bagnaia", constructor: "Ducati", points: 1 },
    { name: "Miguel Oliveira", constructor: "KTM", points: 25 },
    { name: "Marco Bezzechi", constructor: "Ducati", points: 0 },
    { name: "Jorge Martin", constructor: "Ducati", points: 0 },
    { name: "Jack Miller", constructor: "Ducati", points: 13 }
]
// klasemen.sort(function(a,b){
// 	if (a.points > b.points) return -1;
// 	if (a.points < b.points ) return 1;
// 	return 0
// })
// klasemen.forEach((item, index) => {
// 	console.log(index+1 + ". " + item.name)
// });
// console.log()
function sortKlasemen(asal){
for (i = 0; i < klasemen.length; i++) {
    klasemen.sort(function(a,b){
        if (a.points > b.points) return -1;
        if (a.points < b.points ) return 1;
        return 0
    })
}return asal;
}

 console.log(sortKlasemen(klasemen))