const PizzaShop = require("./pizza-shop");
const DrinkMachine = require("./drink-machine");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, topping) => {
    console.log(`Ordering pizza of size ${size} with toppings ${topping}`);
    drinkMachine.saveDrink(size);
});

pizzaShop.order("large", "black olives");
pizzaShop.displayOrderNumber();

pizzaShop.order("medium", "mushroom");
pizzaShop.displayOrderNumber();