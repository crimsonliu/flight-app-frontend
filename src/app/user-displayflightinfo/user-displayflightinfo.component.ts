import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-user-displayflightinfo',
  templateUrl: './user-displayflightinfo.component.html',
  styleUrls: ['./user-displayflightinfo.component.css']
})

export class UserDisplayflightinfoComponent implements OnInit {

  flights:any
  constructor(private service: FlightService, private router: Router) { }

  ngOnInit(): void {
    this.flights = this.service.getMessage();
  }

  onSelect(flight) {
    this.router.navigate(['/displayflights',flight.id]);
  }

}
