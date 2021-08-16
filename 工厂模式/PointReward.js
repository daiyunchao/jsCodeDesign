class PointReward {
    constructor(jsonObj) {
        this.type = 2;
        this.point = jsonObj.point;
    }
    toRewardInfo() {
        return {
            type: this.type,
            point: this.point
        }
    }
}
module.exports = PointReward;