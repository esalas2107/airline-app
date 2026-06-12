import { Passenger } from "../user/passenger";
import { Country } from "../airport/country";
import { State } from "../airport/state";
import { City } from "../airport/city";
import { Airport } from "../airport/airport";
import { Employee } from "../user/employee";
import { Flight } from "./flight";
import { CheckedBaggage } from "./checkedbaggage";
import { HandLuggage } from "./handluggage";
import { Bag } from "./bag";
import { User } from "../user/user";

type FlightReservationState = "Confirmed" | "Issued"

class FlightReservation {
    private _flightReservationId: number;
    private _passengers: Passenger[];
    private _flights: Flight[];
    private _bags: Bag[];
    private _flightReservationState: FlightReservationState;
    private _user: User;

    constructor(flightReservationId: number, passengers: Passenger[], flights: Flight[], bags: Bag[], flightReservationState: FlightReservationState, user: User) {
        this._flightReservationId = flightReservationId;
        this._passengers = passengers;
        this._flights = flights;
        this._bags = bags;
        this._flightReservationState = flightReservationState;
        this._user = user;
    }

    get flightReservationId(): number {
        return this._flightReservationId;
    }

    get passengers(): Passenger[] {
        return this._passengers;
    }

    get flights(): Flight[] {
        return this._flights;
    }

    get bags(): Bag[] {
        return this._bags;
    }

    get flightReservationState(): FlightReservationState {
        return this._flightReservationState;
    }

    get user(): User {
        return this._user;
    }

    addFlight(flight: Flight) {
        this._flights.push(flight);
    }

    flightsInformation(): string {
        let flightsInformation = "";

        this._flights.forEach(flight => {
            flightsInformation += flight.toString()
        });

        return flightsInformation;
    }

    addPassenger(passenger: Passenger) {
        this._passengers.push(passenger);
    }

    passengersInformation(): string {
        let passengersInformation = "";

        this._passengers.forEach(passenger => {
            passengersInformation += passenger.toString()
        });

        return passengersInformation;
    }

    addBag(bag: Bag) {
        this._bags.push(bag);
    }

    bagsInformation(): string {
        let bagsInformation = "";

        this._bags.forEach(bag => {
            bagsInformation += bag.toString()
        });

        return bagsInformation;
    }

    toString(): string {
        return `
        *** FLIGHT RESERVATION INFORMATION ***
        ID: ${this.flightReservationId}
        PASSENGERS: ${this.passengersInformation()}
        FLIGHTS: ${this.flightsInformation()}
        BAGS: ${this.bagsInformation()}
        FLIGHT RESERVATION STATE: ${this.flightReservationState}
        CUSTOMER: ${this._user.toString()}
        `;
    }
}

// Usuario que hace la reserva
const user1 = new Passenger(1, "esteban@gmail.com", "88001122", 1, "Esteban", "Salas", new Date(2002, 6, 21), "118480995");

// Pasajeros
const passenger1 = new Passenger(2, "maria@gmail.com", "87654321", 2, "María", "López", new Date(1990, 3, 15), "205340123");

// Aeropuertos
const country1 = new Country(1, "Costa Rica");
const state1 = new State(1, "Alajuela", country1);
const city1 = new City(1, "Río Segundo", state1);
const airport1 = new Airport(1, "Aeropuerto Internacional Juan Santamaría", city1, [], []);

const country2 = new Country(2, "Panamá");
const state2 = new State(2, "Ciudad de Panamá", country2);
const city2 = new City(2, "Tocumen", state2);
const airport2 = new Airport(2, "Aeropuerto Internacional de Tocumen", city2, [], []);

// Vuelo
const employee1 = new Employee(1, "Captain", 3, "Dagoberto", "Jara", new Date(1980, 4, 7), "402470773");
const flight1 = new Flight(1, airport1, airport2, new Date(2026, 11, 5, 8, 0, 0), new Date(2026, 11, 5, 9, 15, 0), [employee1], "Scheduled");

// Maletas
const bag1 = new CheckedBaggage(1);
const bag2 = new HandLuggage(2);

// Reserva
const reservation1 = new FlightReservation(1, [passenger1], [flight1], [bag1, bag2], "Confirmed", user1);

console.log(reservation1.toString());