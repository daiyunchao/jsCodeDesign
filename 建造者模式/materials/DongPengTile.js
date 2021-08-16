class DongPengTile {
    constructor() {
        this.scene = "瓷砖";
        this.brand = "东鹏";
        this.price = 200;
    }
    getAmount(area) {
        return this.price * area;
    }
}

module.exports = new DongPengTile;