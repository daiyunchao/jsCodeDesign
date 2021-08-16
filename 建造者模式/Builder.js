const DerFloor = require('./materials/DerFloor');
const DongPengTile = require('./materials/DongPengTile');
const DuluxCoat = require('./materials/DuluxCoat');
const Level1Ceiling = require('./materials/Level1Ceiling');
const Level2Ceiling = require('./materials/Level2Ceiling');
const LiBangCoat = require('./materials/LiBangCoat');
const MarcoPoloTile = require('./materials/MarcoPoloTile');
const ShenXiangFloor = require('./materials/ShenXiangFloor');

class Builder {
    createDecorateStyle1(area) {
        let name = "豪华";
        let materialsList = [];
        materialsList.push(Level2Ceiling);
        materialsList.push(LiBangCoat);
        materialsList.push(ShenXiangFloor);
        materialsList.push(MarcoPoloTile);
        this._toInfo(name, materialsList, area);
    }
    createDecorateStyle2(area) {
        let name = "普通";
        let materialsList = [];
        materialsList.push(Level1Ceiling);
        materialsList.push(DuluxCoat);
        materialsList.push(DerFloor);
        materialsList.push(DongPengTile);
        this._toInfo(name, materialsList, area);
    }
    _toInfo(name, materialsList, area) {
        console.log(`装修风格: ${name}`);
        console.log(`材料列表如下:`);
        let sumMoney = 0;
        for (let i = 0; i < materialsList.length; i++) {
            const material = materialsList[i];
            let amount = material.getAmount(area);
            sumMoney += amount;
            console.log(`品牌: ${material.brand}${material.scene},  价格: ${material.price}, 材料总价: ${amount}`);
        }
        console.log(`汇总价格: ${sumMoney}`);
    }
}

module.exports = Builder;