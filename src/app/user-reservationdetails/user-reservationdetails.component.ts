import {Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { FlightService } from '../flight.service';
import { ReservationService} from '../reservation.service'
import {Reservation} from "../reservation"
import { Passenger } from '../passenger';
import { Flight } from '../flight';

@Component({
  selector: 'app-user-reservationdetails',
  templateUrl: './user-reservationdetails.component.html',
  styleUrls: ['./user-reservationdetails.component.css']
})

export class UserReservationdetailsComponent implements OnInit {

  public flightId;
  messages:any;
  alert: any;
  passenger: Passenger = new Passenger("","","","");
  flight: Flight = new Flight(0,0,"","","","","");
  reservation: Reservation = new Reservation(this.flight,this.passenger,false,0);

  constructor(private route: ActivatedRoute, 
              private flightservice: FlightService,
              private reservationservice: ReservationService
              ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id");
    this.flightId = id;
    let resp = this.flightservice.findFlightById(this.flightId);
    resp.subscribe((data)=>{
      this.messages = data;
    })
  }

  public makeReservation(){

    this.flight.id = this.flightId;
    this.reservation.flight = this.flight;
    this.reservation.passenger = this.passenger;
    let resp = this.reservationservice.makeReservation(this.reservation);
    resp.subscribe((data)=>this.alert=data);
    
  }

}
