import { Airport } from "../airport/airport";
import { Employee } from "../user/employee";
import { Airplane } from "./airplane";

type FlightState = "Scheduled" | "Ground Flight" | "In Route" | "Diverted" | "Canceled" | "Landed"
export class Flight {
    private _flightId: number;
    private _flightNumber: string;
    private _origin: Airport;
    private _destination: Airport;
    private _departureDate: Date;
    private _arrivingDate: Date;
    private _flightCrew: Employee[];
    private _flightState: FlightState;
    private _airplane: Airplane;

    constructor(flightId: number, flightNumber: string, origin: Airport, destination: Airport, departureDate: Date, arrivingDate: Date, flightCrew: Employee[], flightState: FlightState, airplane: Airplane) {
        this._flightId = flightId;
        this._flightNumber = flightNumber;
        this._origin = origin;
        this._destination = destination;
        this._departureDate = departureDate;
        this._arrivingDate = arrivingDate;
        this._flightCrew = flightCrew;
        this._flightState = flightState;
        this._airplane = airplane;
    }

    get flightId(): number {
        return this._flightId;
    }

    get flightNumber(): string {
        return this._flightNumber;
    }

    get origin(): Airport {
        return this._origin;
    }

    get destination(): Airport {
        return this._destination;
    }

    get departureDate(): Date {
        return this._departureDate;
    }

    get arrivingDate(): Date {
        return this._arrivingDate;
    }

    get flightCrew(): Employee[] {
        return this._flightCrew;
    }

    get flightState(): FlightState {
        return this._flightState;
    }

    get airplane(): Airplane {
        return this._airplane;
    }

    addEmployee(employee: Employee) {
        this._flightCrew.push(employee);
    }

    flightCrewInformation(): string {
        let employeesInformation = "";

        this._flightCrew.forEach(employee => {
            employeesInformation += employee.toString()
        });

        return employeesInformation;
    }

    calculateDuration(departureDate: Date, arrivalDate: Date): string {
        const diff = arrivalDate.getTime() - departureDate.getTime();
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        return `${hours} h ${minutes} mins`;
    }

    private formatDate(date: Date): string {
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return date.toLocaleString('es-CO', options);
    }

    toString(): string {
        return `
        *** FLIGHT INFORMATION ***
        ID: ${this.flightId}
        FLIGHT NUMBER: ${this.flightNumber}
        ORIGIN: ${this.origin.specialToString()}
        DESTINATION: ${this.destination.specialToString()}
        DEPARTURE DATE: ${this.formatDate(this.departureDate)}
        ARRIVING DATE: ${this.formatDate(this.arrivingDate)}
        DURATION: ${this.calculateDuration(this.departureDate, this.arrivingDate)}
        FLIGHT CREW: ${this.flightCrewInformation()}
        FLIGHT STATE: ${this.flightState}
        AIRPLANE: ${this._airplane.toString()}
        `;
    }
}
