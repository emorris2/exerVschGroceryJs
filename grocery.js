var shopper = {
    name: "Henry",
    budget: 400.00,
    canShop: true,
    buyItem:  function(item, price){
        if (price > shopper.budget){
            console.log("Not enough money!");
            shopper.canShop = false;
            for (var i = 0; i < shopper.shoppingCart.length; i++){
                console.log(shopper.name + " bought " + shopper.shoppingCart[i]);
            }
        } else {
            shopper.budget -= price;
            shopper.shoppingCart.push(item);
            console.log(item + " has been added to shopping cart!  " + shopper.name + " has " + shopper.budget + " left");
        }
    },
    shoppingCart: []

}


console.log(shopper.name + " is going to the store");
console.log(shopper.name + " has " + shopper.budget + " dollars to spend");
console.log("pick up some milk...");
shopper.buyItem("milk", 2.50);
console.log(shopper.name + " has " + shopper.budget + " left");
console.log("Henry picks up a few more things")
shopper.buyItem("eggs", 1.00);
shopper.buyItem("flour", 4.00);
shopper.buyItem("pizza", 7.25);
console.log(shopper.name + " spots shiny new television!");
shopper.buyItem("TV",400.00);
