export class Seat {
    private _seatId: number;
    private _seatCode: string;

    constructor(seatId: number, seatCode: string) {
        this._seatId = seatId;
        this._seatCode = seatCode;
    }

    get seatId(): number {
        return this._seatId;
    }

    get setCode(): string {
        return this._seatCode;
    }

    toString(): string {
        return `
        *** SEAT INFORMATION ***
        ID: ${this.seatId}
        CODE: ${this.setCode}
        `
    }
}
