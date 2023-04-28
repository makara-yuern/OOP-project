export enum ticket {
    SINGLETICKET,
    RETURNTICKET
}

import { BoardingPass } from "../BoardingPass/BoardingPass";
import { Flight } from "../Flight/Flight";
import { Seat, seattypes } from "../Seat/Seat";
import { Trip } from "../Trip/Trip";

export class Booking {

    private trips: Trip[] = [];
    public seats: Seat[] = [];
    public flights: Flight[] = [];
    constructor
    (
        private numberOfPassanger: number, 
        private amount: number, 
        public tickets: ticket,
        private currency: string, 
        public status: string, 
        public dateTime: string, 
        private numberOfTicket: number, 
        public departureTime: string, 
        protected referenceNumber: string,   
        boardingPasses: BoardingPass
    ) {}

    addTrip(trip:Trip){
        return this.trips.push(trip)
    }
    addSeat(seat:Seat){
        return this.seats.push(seat)
    }
    addFlight(flight:Flight){
        return this.flights.push(flight)
    }
}