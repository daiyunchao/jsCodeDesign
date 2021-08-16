class  DuluxCoat{
    constructor() {
        this.scene = "涂料";
        this.brand = "Dulux";
        this.price = 20;
    }
    getAmount(area) {
        return this.price * area;
    }
}

module.exports = new DuluxCoat;