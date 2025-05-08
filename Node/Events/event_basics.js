const EventEmitter = require('node:events');

const emitter = new EventEmitter();

emitter.on("bakePizzas", () => {
    console.log("baking Pizzas");
});

emitter.on("bakePizzas", (size, shape) => {
    console.log(`baking ${size} ${shape} Pizzas`);
});

emitter.on("bakePizzas", (size) => {
    console.log(`baking ${size} Pizzas`);
});


emitter.emit("bakePizzas", "large", "round");