import { allTrueValues, mapBooleanToIcon, randomBoolean } from "./helpers.js";
var SlotMachine = /** @class */ (function () {
    function SlotMachine() {
        this._coinsCounter = 0;
    }
    SlotMachine.prototype.play = function () {
        this.insertCoin();
        this._slots = [randomBoolean(.5), randomBoolean(.5), randomBoolean(.5)];
        this.printResultMessage(allTrueValues(this._slots));
        if (allTrueValues(this._slots))
            this.resetCoins();
    };
    SlotMachine.prototype.insertCoin = function () {
        this._coinsCounter += 1;
    };
    SlotMachine.prototype.printResultMessage = function (result) {
        var resultingCombination = this._slots.map(mapBooleanToIcon).join();
        var message = result
            ? "".concat(resultingCombination, " - Congratulations!!!. You won ").concat(this._coinsCounter, " coins!!")
            : "".concat(resultingCombination, " - Good luck next time!!");
        console.log(message);
    };
    SlotMachine.prototype.resetCoins = function () {
        this._coinsCounter = 0;
    };
    return SlotMachine;
}());
export { SlotMachine };
