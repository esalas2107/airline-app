import { Gate } from "./gate";

export class Terminal {
    private _terminalId: number;
    private _description: string;
    private _gates: Gate[]

    constructor(terminalId: number, description: string) {
        this._terminalId = terminalId;
        this._description = description;
        this._gates = [];
    }

    get terminalId(): number {
        return this._terminalId;
    }

    get description(): string {
        return this._description;
    }

    get gates(): Gate[] {
        return this._gates;
    }

    addGate(gate: Gate) {
        this._gates.push(gate);
    }

    gatesInformation(gates: Gate[]): string {
        let gatesInformation = "";

        gates.forEach(gate => {
            gatesInformation += gate.toString()
        });

        return gatesInformation;
    }

    toString(): string {
        return `
        *** TERMINAL INFORMATION ***
        ID: ${this.terminalId}
        DESCRIPTION: ${this.description}
        GATES: ${this.gatesInformation(this.gates)}
        `;
    }
}