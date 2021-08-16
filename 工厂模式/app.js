let RewardFactory = require('./RewardFactory');
let rewardList = [
    {
        type: 3,
        cardCount: 10
    },
    {
        type: 1,
        chips: 10000
    },
];
let rewardItemInfos = [];
for (let i = 0; i < rewardList.length; i++) {
    const rewardItem = rewardList[i];
    let reward = RewardFactory.createReward(rewardItem.type, rewardItem);
    let info = reward.toRewardInfo();
    rewardItemInfos.push(info);
}
console.log("rewardItemInfos==>", rewardItemInfos);
