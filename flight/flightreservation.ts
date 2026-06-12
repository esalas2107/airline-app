import { Passenger } from "../user/passenger";
import { Bag } from "./bag";
import { User } from "../user/user";
import { AirlineTicket } from "./airlineticket";

type FlightReservationState = "Pending" | "Confirmed" | "Issued" | "CheckedIn" | "Cancelled"

export class FlightReservation {
    private _flightReservationId: number;
    private _passengers: Passenger[];
    private _tickets: AirlineTicket[];
    private _bags: Bag[];
    private _flightReservationState: FlightReservationState;
    private _user: User;

    constructor(flightReservationId: number, passengers: Passenger[], tickets: AirlineTicket[], bags: Bag[], flightReservationState: FlightReservationState, user: User) {
        this._flightReservationId = flightReservationId;
        this._passengers = passengers;
        this._tickets = tickets;
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

    get tickets(): AirlineTicket[] {
        return this._tickets;
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

    addAirlineTicket(airlineTicket: AirlineTicket) {
        this._tickets.push(airlineTicket);
    }

    ticketsInformation(): string {
        let ticketsInformation = "";

        this._tickets.forEach(ticket => {
            ticketsInformation += ticket.toString()
        });

        return ticketsInformation;
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
        TICKETS: ${this.ticketsInformation()}
        BAGS: ${this.bagsInformation()}
        FLIGHT RESERVATION STATE: ${this.flightReservationState}
        CUSTOMER: ${this._user.toString()}
        `;
    }
}