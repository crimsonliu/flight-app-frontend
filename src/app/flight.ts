export class Flight{
    id: number;
    flightNumber: number;
    operatingAirline: string;
    departureCity: string;
    arrivalCity: string;
    dateOfDeparture: any;
    estimatedDepartureTime: any;

    constructor(
        id:number,
        flightNumber: number,
        operatingAirline: string,
        departureCity: string,
        arrivalCity: string,
        dateOfDeparture: any,
        estimatedDepartureTime: any
    ){}
}
