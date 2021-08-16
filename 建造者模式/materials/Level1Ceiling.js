class  Level1Ceiling{
    constructor() {
        this.scene = "吊顶";
        this.brand = "一级吊顶";
        this.price = 30;
    }
    getAmount(area) {
        return this.price * area;
    }
}

module.exports = new Level1Ceiling;