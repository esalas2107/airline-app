import { State } from "./state";
import { Country } from "./country";

class City {
    private _cityId: number;
    private _cityName: string;
    private _state: State;

    constructor(cityId: number, cityName: string, state: State) {
        this._cityId = cityId;
        this._cityName = cityName;
        this._state = state;
    }

    get cityId(): number {
        return this._cityId;
    }

    get cityName(): string {
        return this._cityName;
    }

    get state(): State {
        return this._state;
    }

    toString(): string {
        return `
        *** CITY INFORMATION ***
        ID: ${this._cityId}
        NAME: ${this._cityName}
        STATE: ${this.state.toString()}
        `;
    }
}
