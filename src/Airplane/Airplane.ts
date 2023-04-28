import { Flight } from "../Flight/Flight";
import { Route } from "../Route/Route";

export class Airplane {
    public flights: Flight[] = [];
    public routs: Route[] = [];
    constructor
    (
        public airplaneName: string, 
        public takeOfTime: string, 
        public numberOfSeat: number
    ) {}

    addFlight(flight: Flight){
        return this.flights.push(flight)
    }
    addRoute(route: Route) {
        return this.routs.push(route)
    }
}