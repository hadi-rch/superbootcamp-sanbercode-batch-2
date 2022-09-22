class Kelas{
    constructor(name,level,instructor) {
        this._name = name;
        this._students= [];
        this._level = level;
        this._instructor = instructor;
    }
    get name() { 
        return this._name; 
    }
    set name(nama) {
        return this._name = nama;
    }
    // get students() {
    //     return this._students
    // }
    get level() { 
        return this._level; 
    }
    set level(level) {
        return this._level = level;
    }
    get instructor() { 
        return this._instructor; 
    }
    set instructor(instructor) {
        return this._instructor = instructor;
    }
}

// module.export = Kelas;
module.exports = Kelas;