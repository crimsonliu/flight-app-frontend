import {Flight} from './flight'
import {Passenger} from'./passenger'

export class Reservation{

    flight: Flight;
    passenger: Passenger;
    checkedIn: boolean;
    numberOfBags: number;

    constructor(
        flight: Flight,
        passenger: Passenger,
        checkedIn: boolean,
        numberOfBags: number
    ){}
}