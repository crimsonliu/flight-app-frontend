import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-user-displayflightinfo',
  templateUrl: './user-displayflightinfo.component.html',
  styleUrls: ['./user-displayflightinfo.component.css']
})

export class UserDisplayflightinfoComponent implements OnInit {

  flights:any
  constructor(private service: FlightService) { }

  ngOnInit(): void {
    this.flights = this.service.getMessage();
  }

}
