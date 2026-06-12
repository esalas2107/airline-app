import { Country } from "./country";

export class State {
    private _stateId: number;
    private _stateName: string;
    private _country: Country;

    constructor(stateId: number, stateName: string, country: Country) {
        this._stateId = stateId;
        this._stateName = stateName;
        this._country = country;
    }

    get stateId(): number {
        return this._stateId;
    }

    get stateName(): string {
        return this._stateName;
    }

    get country(): Country {
        return this._country;
    }

    toString(): string {
        return `
        *** STATE INFORMATION ***
        ID: ${this.stateId}
        NAME: ${this.stateName}
        COUNTRY: ${this.country.toString()}  
        `;
    }
}