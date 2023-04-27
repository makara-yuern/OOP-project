
import { Payment } from "../Payment/Payment";
import { Seat } from "../Seat/Seat";

export class Ticket {
    constructor(public dateTime: string,private numberOfTicket: number,private seat: Seat, payment: Payment,public departureTime: string){

    }
     
}