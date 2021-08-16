class CardsReward {
    constructor(jsonObj) {
        this.type = 3;
        this.cardCount = jsonObj.cardCount;
    }
    toRewardInfo() {
        return {
            type: this.type,
            cardCount: this.cardCount
        }
    }
}
module.exports = CardsReward;