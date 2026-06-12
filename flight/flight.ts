import { Airport } from "../airport/airport";
import { City } from "../airport/city";
import { Country } from "../airport/country";
import { State } from "../airport/state";
import { Employee } from "../user/employee";

type FlightState = "Scheduled" | "Ground Flight" | "In Route" | "Diverted" | "Diverted" | "Canceled" | "Landed"
export class Flight {
    private _flightId: number;
    private _origin: Airport;
    private _destination: Airport;
    private _departureDate: Date;
    private _arrivingDate: Date;
    private _flightCrew: Employee[];
    private _flightState: FlightState;

    constructor(flightId: number, origin: Airport, destination: Airport, departureDate: Date, arrivingDate: Date, flightCrew: Employee[], flightState: FlightState) {
        this._flightId = flightId;
        this._origin = origin;
        this._destination = destination;
        this._departureDate = departureDate;
        this._arrivingDate = arrivingDate;
        this._flightCrew = flightCrew;
        this._flightState = flightState;
    }

    get flightId(): number {
        return this._flightId;
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
        ORIGIN: ${this.origin.specialToString()}
        DESTINATION: ${this.destination.specialToString()}
        DEPARTURE DATE: ${this.formatDate(this.departureDate)}
        ARRIVING DATE: ${this.formatDate(this.arrivingDate)}
        DURATION: ${this.calculateDuration(this.departureDate, this.arrivingDate)}
        FLIGHT CREW: ${this.flightCrewInformation()}
        STATE: ${this.flightState}
        `;
    }
}

const country1 = new Country(1, "Costa Rica");

const state1 = new State(1, "Alajuela", country1);

const city1 = new City(1, "Río Segundo", state1);

const airport1 = new Airport(1, "Aeropuerto Internacional Juan Santamaría", city1, [], []);

const country2 = new Country(2, "Panamá");

const state2 = new State(2, "Ciudad de Panamá", country1);

const city2 = new City(2, "Tocumen", state2);

const airport2 = new Airport(2, "Aeropuerto Internacional de Tocumen", city2, [], []);

const employee1 = new Employee(1, "Captain", 1, "Dagoberto", "Jara", new Date(2000, 4, 7), "402470773")

const employee2 = new Employee(2, "Stewardess", 2, "Mari Sol", "Mena", new Date(2002, 8, 14), "118530324");

const flight1 = new Flight(1, airport1, airport2, new Date(2026, 11, 5, 2, 0, 0), new Date(2026, 11, 5, 2, 45, 0), [], "Scheduled");

flight1.addEmployee(employee1);
flight1.addEmployee(employee2);

console.log(flight1.toString());