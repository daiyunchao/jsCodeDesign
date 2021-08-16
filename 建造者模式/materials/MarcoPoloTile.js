class  MarcoPoloTile{
    constructor() {
        this.scene = "瓷砖";
        this.brand = "马可波罗";
        this.price = 300;
    }
    getAmount(area) {
        return this.price * area;
    }
}

module.exports = new MarcoPoloTile;