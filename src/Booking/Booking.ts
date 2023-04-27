export enum ticket {
    SINGLETICKET,
    RETURNTICKET
}

import { BoardingPass } from "../BoardingPass/BoardingPass";
import { Flight } from "../Flight/Flight";
import { Seat, seattypes } from "../Seat/Seat";
import { Trip } from "../Trip/Trip";

export class Booking {
    constructor(private numberOfPassanger: number, private amount: number, private currency: string, public status: string, public dateTime: string, private numberOfTicket: number, public departureTime: string, seats: Seat, trips: Trip, flights: Flight, boardingPasses: BoardingPass){}
}