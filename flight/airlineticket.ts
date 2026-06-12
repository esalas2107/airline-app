import { Passenger } from "../user/passenger";
import { TicketSegment } from "./ticketsegment";

type AirlineTicketsType = "Economy" | "Premium Economy" | "Business"

class AirlineTicket {
    private _airlineTicketId: number
    private _passenger: Passenger;
    private _ticketsSegments: TicketSegment[];
    private _price: number;
    private _type: AirlineTicketsType;

    constructor(airlineTicketId: number, passenger: Passenger, ticketsSegments: TicketSegment[], price: number, type: AirlineTicketsType) {
        this._airlineTicketId = airlineTicketId;
        this._passenger = passenger;
        this._ticketsSegments = ticketsSegments;
        this._price = price;
        this._type = type;
    }

    get airlineTicketId(): number {
        return this._airlineTicketId;
    }

    get passenger(): Passenger {
        return this._passenger;
    }

    get ticketsSegments(): TicketSegment[] {
        return this._ticketsSegments;
    }

    get price(): number {
        return this._price;
    }

    get type(): AirlineTicketsType {
        return this._type;
    }

    addTicketSegment(ticketSegment: TicketSegment): void {
        this._ticketsSegments.push(ticketSegment);
    }

    ticketsSegmentsInformation(ticketsSegments: TicketSegment[]): string {
        let ticketsSegmentInformation = "";

        ticketsSegments.forEach(ticketSegment => {
            ticketsSegmentInformation += ticketSegment.toString()
        });

        return ticketsSegmentInformation;
    }

    toString(): string {
        return `
        *** AIRLINE TICKET INFORMATION ***
        ID: ${this.airlineTicketId}
        PASSENGER: ${this.passenger.toString()}
        TICKET(S): ${this.ticketsSegmentsInformation(this.ticketsSegments)}
        PRICE: ${this.price}
        TYPE: ${this.type}
        `
    }
}