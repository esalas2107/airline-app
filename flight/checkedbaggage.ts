import { Bag } from "./bag";

export class CheckedBaggage extends Bag {
    constructor(bagId: number, measures: string = "70 x 50 x 38 cm", weight: number = 32) {
        super(bagId, measures, weight);
    }

    toString(): string {
        return `
        *** Checked Baggage INFORMATION ***
        ID: ${this.bagId}
        MEASURES: ${this.measures}
        WEIGHT: ${this.weight}
        `;
    }
}

const checkedBaggage1 = new CheckedBaggage(1);

console.log(checkedBaggage1.toString());