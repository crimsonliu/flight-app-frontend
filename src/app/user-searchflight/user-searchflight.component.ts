import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import {Flight} from '../flight';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-user-searchflight',
  templateUrl: './user-searchflight.component.html',
  styleUrls: ['./user-searchflight.component.css']
})

export class UserSearchflightComponent implements OnInit {

  flight: Flight = new Flight(0,"","","","","");
  flights: any;
  options: string[] = ['Singapore', 'Shanghai', 'Los Angelas'];

  constructor(private service: FlightService, private router: Router) { }

  ngOnInit(): void {
  }

  public searchFlight(){
    let resp = this.service.findFlightByCityAndDate(this.flight);
    resp.subscribe((data)=>{
      this.service.flightList=data;
      this.router.navigate(["/displayflights"]);
    })
  }
}
