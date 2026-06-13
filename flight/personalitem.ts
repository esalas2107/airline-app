import { Bag } from "./bag";

export class PersonalItem extends Bag {

    constructor(bagId: number, measures: string = "45 × 35 × 20 cm", weight: number = 8) {
        super(bagId, measures, weight);
    }

    toString(): string {
        return `
        *** PERSONAL ITEM INFORMATION ***
        MEASURES: ${this.measures}
        WEIGHT: ${this.weight}
        `;
    }
} 