class superhero{

    constructor(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }
}

// instead of exporting the instance of a class, exporting the class itself will not cause module exporting
module.exports = superhero;