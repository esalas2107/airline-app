import { Flight } from "./flight";
import { Seat } from "./seat";

export class TicketSegment {
    private _ticketSegmentId: number;
    private _flight: Flight;
    private _seat: Seat;

    constructor(ticketSegmentId: number, flight: Flight, seat: Seat) {
        this._ticketSegmentId = ticketSegmentId;
        this._flight = flight;
        this._seat = seat;
    }

    get ticketSegmentId(): number {
        return this._ticketSegmentId;
    }

    get flight(): Flight {
        return this._flight;
    }

    get seat(): Seat {
        return this._seat;
    }

    toString(): string {
        return `
        *** TICKET SEGMENT INFORMATION ***
        ID: ${this.ticketSegmentId}
        FLIGHT: ${this.flight.toString()}
        SEAT: ${this._seat.toString()}
        `
    }
}