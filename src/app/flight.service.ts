import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  flightList: any;

  constructor(private http: HttpClient) {
   }

   public addFlight(flight){
     return this.http.post("http://localhost:9090/addFlight",flight, {responseType:'text' as 'json'});
   }

   public displayflightinfo(){
     return this.http.get("http://localhost:9090/findAllFlights");
   }

   public findFlightByCityAndDate(flight){
      return this.http.post("http://localhost:9090/findFlightByCityAndDate", flight,{});
   }

   public findFlightById(id){
      return this.http.get("http://localhost:9090/findFlightById/"+id,{});
   }

   getMessage(){
     return this.flightList;
   }
   

}
