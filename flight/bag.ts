export abstract class Bag {
    protected _bagId: number;
    protected _measures: string;
    protected _weight: number;

    constructor(bagId: number, measures: string, weight: number) {
        this._bagId = bagId;
        this._measures = measures;
        this._weight = weight;
    }

    get bagId(): number {
        return this._bagId;
    }

    get measures(): string {
        return this._measures;
    }

    get weight(): number {
        return this._weight;
    }

    abstract toString(): string
}
