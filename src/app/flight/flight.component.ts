import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Flight} from '../flight';
import {FlightService} from '../flight.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})

export class FlightComponent implements OnInit {

  flight: Flight = new Flight(0,"","","","","");
  message: any;

  constructor(private service: FlightService) { }

  ngOnInit(): void {

  }

  public addFlight(){
    let resp=this.service.addFlight(this.flight);
    resp.subscribe((data)=>this.message=data);
  }
}
