class  Level2Ceiling{
    constructor() {
        this.scene = "吊顶";
        this.brand = "二级吊顶";
        this.price = 60;
    }
    getAmount(area) {
        return this.price * area;
    }
}

module.exports = new Level2Ceiling;