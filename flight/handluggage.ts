import { Bag } from "./bag";

export class HandLuggage extends Bag {
    constructor(bagId: number, measures: string = "55 × 40 × 25 cm", weight: number = 10) {
        super(bagId, measures, weight);
    }

    toString(): string {
        return `
        *** HAND LUGGAGE INFORMATION ***
        MEASURES: ${this.measures}
        WEIGHT: ${this.weight}
        `;
    }
}

