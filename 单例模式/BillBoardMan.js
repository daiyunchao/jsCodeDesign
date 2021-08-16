class BillBoardMan {
    constructor() {
        console.log("初始化");
        this._boardConfig;
    }
    loadConfigs() {
        this._boardConfig = {
            "isOpen": true,
            "configList": [1, 2, 3, 4]
        }
    }
    getBoardConfig() {
        return this._boardConfig;
    }
}
let billBoardMan = new BillBoardMan();
billBoardMan.loadConfigs();
module.exports = billBoardMan