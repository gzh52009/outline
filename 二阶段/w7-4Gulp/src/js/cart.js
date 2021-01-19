class Cart{
    constructor(){

    }
    buy(){

    }
    add2cart(){

    }
}

class ShoppingCart extends Cart{
    constructor(){
        super();
        this.name = 'shoppingcart'
    }
    pay(){

    }
}

const c = new ShoppingCart();