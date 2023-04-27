
import { Flight } from "../Flight/Flight";

export class Airport {
    constructor(public name: string,public address: string, flights: Flight){}
}