import { allTrueValues, mapBooleanToIcon, randomBoolean } from "./helpers.js";

export class SlotMachine {
    private _coinsCounter: number = 0;
    private _slots: [boolean, boolean, boolean];

    play() {
        this.insertCoin();
        this._slots = [randomBoolean(.5), randomBoolean(.5), randomBoolean(.5)];
        this.printResultMessage(allTrueValues(this._slots));
        if (allTrueValues(this._slots)) this.resetCoins();
    }

    private insertCoin() {
        this._coinsCounter += 1;
    }

    private printResultMessage(result: boolean): void {
        const resultingCombination = this._slots.map(mapBooleanToIcon).join();
        const message = result
            ? `${resultingCombination} - Congratulations!!!. You won ${this._coinsCounter} coins!!`
            : `${resultingCombination} - Good luck next time!!`;
        console.log(message);
    }

    private resetCoins() {
        this._coinsCounter = 0;
    }
}