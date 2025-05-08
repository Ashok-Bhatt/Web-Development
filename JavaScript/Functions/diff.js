
let growing = null;

function Person(){

    this.age = 0;
    growing = setInterval(()=>{
        this.age++;
        if (this.age==10){
            clearInterval(growing);
        } else {
            console.log(this.age);
        }
    }, 250)
}

const p1 = new Person()
const p2 = new Person()