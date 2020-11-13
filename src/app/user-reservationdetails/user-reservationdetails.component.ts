import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-user-reservationdetails',
  templateUrl: './user-reservationdetails.component.html',
  styleUrls: ['./user-reservationdetails.component.css']
})

export class UserReservationdetailsComponent implements OnInit {

  public flightId;
  messages:any;

  constructor(private route: ActivatedRoute, private service: FlightService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id");
    this.flightId = id;
    let resp = this.service.findFlightById(this.flightId);
    resp.subscribe((data)=>{
      this.messages = data;
    })
  }

  public makeReservation(){
    
  }


}
