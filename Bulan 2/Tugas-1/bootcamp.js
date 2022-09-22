const Kelas = require('./kelas') 
// const Student = require('./students')

class Bootcamp {
    constructor(name,level,instructor){
        this._name = name;
        this._classes = [];     
        this._level = level;
        this._instructor = instructor;
    }
    get name(){
        return this._name;
    }
    get classes() {
        return this._classes;
    }
    get level(){
        return this._level;
    }
    get instructor() {
        return this._instructor;
    }
    createClass(name,level,instructor){
        const class_news = new Kelas(name, level, instructor);
        this._classes.push(class_news)
    }
    // register(kelas, newStud){


    // }
    
}

const sanber = new Bootcamp("sanbercode")
sanber.createClass("Laravel", "beginner", "abduh")
sanber.createClass("React", "beginner", "abdul")
console.log(sanber.classes)


// let names = ["regi", "ahmad", "bondra", "iqbal", "putri", "rezky"]
// names.map((nama, index) => {
//   let newStud = new Student(nama)
//   let kelas = sanber.classes[index % 2].name
//   sanber.register(kelas, newStud) 
// })
// // menampilkan data kelas dan student nya
// sanber.classes.forEach(kelas => {
//   console.log(kelas)
// });