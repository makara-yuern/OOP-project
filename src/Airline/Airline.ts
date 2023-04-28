import { Airplane } from "../Airplane/Airplane";

export class Airline {
    public airplanes: Airplane[] = [];
    constructor
    (
        public airlineName: string
    ) {}
    
    addAirline(airplane: Airplane) {
        return this.airplanes.push(airplane);
    }
}