import { BoardingPass } from "../BoardingPass/BoardingPass";
import { Booking } from "../Booking/Booking";
import { Person, genders } from "../Person/Person";
import { Ticket } from "../Ticket/Ticket";
import { meals } from "../Flight/Flight"

export class Passanger extends Person {
    constructor(name: string, gender: genders, passportNumber: number, email: string, phoneNumber: number, address: string, birthDate: string,
        boardingPass: BoardingPass, ticket: Ticket,public baggage: string, meal: meals, booking: Booking 
        ){
        super(name,gender,passportNumber,email,phoneNumber,address,birthDate)
    }
}