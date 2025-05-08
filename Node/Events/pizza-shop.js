const { EventEmitter } = require("stream");

class PizzaShop extends EventEmitter{
    constructor(){
        super();
        this.orderNo = 0;
    }

    order(size, topping){
        this.orderNo++;
        this.emit("order", size, topping);
    }

    displayOrderNumber(){
        console.log(this.orderNo);
    }
}

module.exports = PizzaShop;