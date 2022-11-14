class basket {
    constructor(){
        let basket = localStorage.getItem("basket")
    if( basket == null){
        this.basket= [];
    } else {
       this.basket =  JSON.parse(this.basket)
    }
    }
    saveBasket(){
        localStorage.setItem("basket", JSON.stringify(this.basket))
    }
    addBasket(product){
        let foundProduct = this.basket.find(p=>p.id == product.id)
        if(foundProduct != undefined){
            foundProduct.quantity++;
        }else{
            product.quantity =1 ;
            this.basket.push(product)
        }
        saveBasket(this.basket)
    }
    removeBasket(product) {
        this.basket= this.basket.filter(p=>p.id != product.id)
        saveBasket()
    }
    changeQuantity(product, quantity ) {
        let foundProduct = this.basket.find(p=>p.id == product.id)
        if(foundProduct != undefined){
            foundProduct.quantity += quantity;
        if(foundProduct.quantity <= 0){
            removeBasket(foundProduct)
        }else {
           saveBasket()
        }
    }
}
getNumber() {
    let number = 0
    for(let product of this.basket){
        number += product.quantity;
    }
    return number;
}
totalProduct() {
    let total = 0 
    for(let product of this.basket){
        total += product.quantity * product.price
    }
    return total
}
    }
