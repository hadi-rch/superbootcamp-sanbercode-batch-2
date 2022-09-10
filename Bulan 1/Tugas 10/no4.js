var phones=[
    {name: "Samsung Galaxy A52", brand: "Samsung", year: 2021, colors: ["black", "white"]},
    {name: "Redmi Note 10 Pro", brand: "Xiaomi", year: 2021, colors: ["white", "blue"]},
    {name: "Redmi Note 9 Pro", brand: "Xiaomi", year: 2020, colors: ["white", "blue", "black"]},
    {name: "Iphone 12", brand: "Apple", year: 2020, colors: ["silver", "gold"]},
    {name: "Iphone 11", brand: "Apple", year: 2019, colors: ["gold", "black", "silver"]},
]
function addkolor(index){
    if (index < phones.length) {
        if (phones[index].colors.find(function(d){
            return d.colors == ("black")}));
        {
            phones.sort(function(a,b){
                if (a.year > b.year) return 1;
                if (a.year < b.year) return -1;
                return 0;
            } )
            // if (phones[index].colors.indexOf("black") === -1) {
            phones.forEach(function(item,index,asale) {
            return console.log(index+1 +" ."+ item.name + " "+ phones[index].colors) ;
            // addkolor(index+1);
        })
    }
    // addkolor(index +1)
}

}
addkolor(0)
// console.log(phones)




// tampilkan data phones yang memiliki warna black dan dan urutkan berdasarkan tahun terkecil hingga terbesar
// lalu tampilkan namanya saja dengan recursive function dan tampilkan colors nya juga

// expected output:

// 1. Iphone 11, colors available : gold, black, silver
// 2. Redmi Note 9 Pro, colors available : white, blue, black
// 3. Samsung Galaxy A52, colors available : black, white