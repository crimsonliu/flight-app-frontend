import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  public makeReservation(reservation){
    this.http.post("http://localhost:9090/makeReservation",reservation, {})
  }
  
}
