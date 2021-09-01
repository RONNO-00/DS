class Fraazo {

    #CartItems = [];
    #Payment = false;
    #CompanyFirstOrderRefferalAmount = 150;
    
    constructor(customerName, couponCodeReferral) {
        this.customerName = customerName,
            this.couponCodeReferral = couponCodeReferral
    }

    AddToCart(product) {
        this.#CartItems.push(product);
    }}