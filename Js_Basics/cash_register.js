const cashRegister = {
    // List of available items for sale. 

    availableItems: {
        "phone": 300,
        "Smart TV": 220,
        "Gaming Console": 150
    },

    // initial empty shopping cart ( it is an empty array);

    shoppingCart:[],

    // object method to add items to the shopping cart

    addItem: function (itemName){
        if (this.availableItems[itemName]){
           //move to shopping Cart 
           this.shoppingCart.push(itemName);
           console.log(`${itemName} added to the cart.`)
        }else{
            console.log("We dont sell that item.")
        }
    },
    
    // method to calculate total price
    calculateTotalPrice: function(){
        let totalPrice = 0;
        this.shoppingCart.forEach(item => {
            totalPrice += this.availableItems[item];
        });

        // apply discount if total price is > 400.
        if(totalPrice > 400){
            console.log("A 10% discount has ben applied");
            totalPrice *= 0.9; // apply 10% discount. 
        }
        
        return totalPrice;
    },
    pay: function(paymentAmount){
        const totalPrice = this.calculateTotalPrice();
        if(paymentAmount >= totalPrice){
            const change = paymentAmount - totalPrice;
            console.log(`thank you for your Purchase. Your change is $${change.toFixed(2)}`)
        }else{
            console.log("Yo do not have enough money to purchase the items");
        }
    }
};

// test the functionality of our cash register

// adding Items

cashRegister.addItem("phone");
cashRegister.addItem("Smart TV");
cashRegister.addItem("Gaming Console");
cashRegister.addItem("Laptop"); // Will give an error message

// Calculating Total Price ( should apply discount if applicable)

console.log(`Total price: $${cashRegister.calculateTotalPrice().toFixed(2)}`);

// making a payment

cashRegister.pay(400); // adjust the amount for different scenarios.

