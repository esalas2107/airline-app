export class Airplane {
    private _airplaneId: number;
    private _model: string;
    private _seatsCapacity: number;

    constructor(airplaneId: number, model: string, seatsCapacity: number) {
        this._airplaneId = airplaneId;
        this._model = model;
        this._seatsCapacity = seatsCapacity;
    }

    get airplaneId(): number {
        return this._airplaneId;
    }

    get model(): string {
        return this._model;
    }

    get seatsCapacity(): number {
        return this._seatsCapacity;
    }

    toString(): string {
        return `
        *** AIRPLANE INFORMATION ***
        ID: ${this.airplaneId}
        MODEL: ${this.model}
        NUMBER OF SEATS: ${this.seatsCapacity}
        `;
    }
}