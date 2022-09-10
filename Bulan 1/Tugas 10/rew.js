var phones=[
    {name: "Samsung Galaxy A52", brand: "Samsung", year: 2021, colors: ["black", "white"]},
    {name: "Redmi Note 10 Pro", brand: "Xiaomi", year: 2021, colors: ["white", "blue"]},
    {name: "Redmi Note 9 Pro", brand: "Xiaomi", year: 2020, colors: ["white", "blue", "black"]},
    {name: "Iphone 12", brand: "Apple", year: 2020, colors: ["silver", "gold"]},
    {name: "Iphone 11", brand: "Apple", year: 2019, colors: ["gold", "black", "silver"]},
  ]
function addBrown(index){
    if (index < phones.length) {
        if (phones[index].year >= 2020) {
            phones[index].colors.push("brown")
        }
        addBrown(index +1)
    }
}
addBrown(0)
console.log(phones) 
// berdasarkan data phones diatas isilah tambahan colors brown untuk data 
// phones yang dirilis tahun 2020 atau lebih
