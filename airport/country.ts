export class Country {
    private _countryId: number;
    private _countryName: string;

    constructor(countryId: number, countryName: string) {
        this._countryId = countryId;
        this._countryName = countryName;
    }

    get countryId(): number {
        return this._countryId;
    }

    get countryName(): string {
        return this._countryName;
    }

    toString(): string {
        return `
        *** COUNTRY INFORMATION ***
        ID: ${this.countryId}
        NAME: ${this.countryName}
        `;
    }

}