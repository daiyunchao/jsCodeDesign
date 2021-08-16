class  ShenXiangFloor{
    constructor() {
        this.scene = "地板";
        this.brand = "圣象";
        this.price = 300;
    }
    getAmount(area) {
        return this.price * area;
    }
}

module.exports = new ShenXiangFloor;