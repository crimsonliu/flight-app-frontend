import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ReservationService {

  constructor(private http: HttpClient) { }

  public makeReservation(reservation){
    return this.http.post("http://localhost:9090/makeReservation",reservation, {responseType:'text' as 'json'})
  }
  
}
