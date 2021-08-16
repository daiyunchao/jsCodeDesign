class ChipsReward {
    constructor(jsonObj) {
        this.type = 1;
        this.chips = jsonObj.chips;
    }
    toRewardInfo() {
        return {
            type: this.type,
            chips: this.chips
        }
    }
}
module.exports = ChipsReward;