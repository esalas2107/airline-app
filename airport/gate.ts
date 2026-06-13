export class Gate {
    private _gateId: number;
    private _gateCode: string;

    constructor(gateId: number, gateCode: string) {
        this._gateId = gateId;
        this._gateCode = gateCode;
    }

    get gateId(): number {
        return this._gateId;
    }

    get gateCode(): string {
        return this._gateCode;
    }

    toString(): string {
        return `
        *** GATE INFORMATION ***
        CODE: ${this.gateCode}
        `;
    }
}