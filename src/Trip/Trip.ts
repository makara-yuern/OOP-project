
import { Passanger } from "../Passanger/Passanger";

export class Trip {
    constructor
    (
        public destination: string,
        public duration: number, 
        passanger: Passanger
    ) {}
}