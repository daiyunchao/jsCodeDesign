class DerFloor {
    constructor() {
        this.scene = "地板";
        this.brand = "德尔Der";
        this.price = 100;
    }
    getAmount(area) {
        return this.price * area;
    }
}

module.exports = new DerFloor;