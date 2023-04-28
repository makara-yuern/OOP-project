import { BoardingPass } from "../BoardingPass/BoardingPass";
import { Booking } from "../Booking/Booking";
import { Person, genders } from "../Person/Person";
import { meals } from "../Flight/Flight"

export class Passanger extends Person {
    public bookings: Booking[] = [];
    constructor
    (
        private passportNumber: number, 
        private birthDate: string, 
        public baggage: string, 
        private meal: meals,
        name: string, 
        email: string, 
        phoneNumber: number, 
        address: string, 
        gender: genders, 
        boardingPass: BoardingPass
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

    addBooing(booking: Booking){
        return this.bookings.push(booking)
    }
}