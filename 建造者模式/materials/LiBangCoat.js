class  LiBangCoat{
    constructor() {
        this.scene = "涂料";
        this.brand = "立邦";
        this.price = 30;
    }
    getAmount(area) {
        return this.price * area;
    }
}

module.exports = new LiBangCoat;