let CardsReward = require('./CardsReward');
let ChipsReward = require('./ChipsReward');
let PointReward = require('./PointReward');
class RewardFactory {
    createReward(rewardType, jsonObj) {
        let RewardItem;
        switch (rewardType) {
            case 1:
                RewardItem = new ChipsReward(jsonObj);
                break;
            case 2:
                RewardItem = new PointReward(jsonObj);
                break;
            case 3:
                RewardItem = new CardsReward(jsonObj);
                break;
            default:
                throw new Error("未知奖励类型");
                break;
        }
        return RewardItem;
    }
}

let rewardFactory = new RewardFactory();
module.exports = rewardFactory;