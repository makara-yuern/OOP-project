import { BoardingPass } from "../BoardingPass/BoardingPass";
import { Booking } from "../Booking/Booking";
import { Person, genders } from "../Person/Person";
import { meals } from "../Flight/Flight"

export class Passanger extends Person {
    constructor
    (
        private passportNumber: number, 
        private birthDate: string, 
        public baggage: string, 
        name: string, 
        email: string, 
        phoneNumber: number, 
        address: string, 
        gender: genders, 
        boardingPass: BoardingPass,
        meal: meals, 
        bookings: Booking 
    )
    {
        super
        (
            name,
            email,
            phoneNumber,
            address,
            gender
        )
    }
}