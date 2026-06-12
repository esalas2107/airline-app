import { Flight } from "../flight/flight";
import { City } from "./city";
import { Terminal } from "./terminal";

class Airport {
    private _airportId: number;
    private _airportName: string
    private _city: City;
    private _flights: Flight[];
    private _terminals: Terminal[];

    constructor(airportId: number, airportName: string, city: City, flights: Flight[], terminals: Terminal[]) {
        this._airportId = airportId;
        this._airportName = airportName;
        this._city = city;
        this._flights = flights;
        this._terminals = terminals;
    }

    get airportId(): number {
        return this._airportId;
    }

    get airportName(): string {
        return this._airportName;
    }

    get city(): City {
        return this._city;
    }

    get flights(): Flight[] {
        return this._flights;
    }

    get terminals(): Terminal[] {
        return this._terminals;
    }

    addFlight(flight: Flight) {
        this._flights.push(flight);
    }

    addTerminal(terminal: Terminal) {
        this._terminals.push(terminal);
    }

    terminalsInformation(terminals: Terminal[]): string {
        let terminalsInformation = "";

        terminals.forEach(terminal => {
            terminalsInformation += terminal.toString()
        });

        return terminalsInformation;
    }

    flightsInformation(flights: Flight[]): string {
        let flightsInformation = "";

        flights.forEach(flight => {
            flightsInformation += flight.toString()
        });

        return flightsInformation;
    }

    toString(): string {
        return `
        *** AIRPORT INFORMATION ***
        ID: ${this.airportId}
        NAME: ${this.airportName}
        CITY: ${this.city.toString()}
        TERMINALS: ${this.terminalsInformation(this.terminals)}
        FLIGHTS: ${this.flightsInformation(this.flights)}
        `;
    }
}