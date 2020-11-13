import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FlightComponent } from './flight/flight.component';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes} from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserDisplayflightinfoComponent } from './user-displayflightinfo/user-displayflightinfo.component';
import { UserSearchflightComponent } from './user-searchflight/user-searchflight.component';
import { UserReservationdetailsComponent} from './user-reservationdetails/user-reservationdetails.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule } from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {path: '', redirectTo:'flight', pathMatch:'full'},
  {path: 'flight', component: FlightComponent},
  {path: 'registration', component: UserRegistrationComponent},
  {path: 'login', component: UserLoginComponent},
  {path: 'searchflight', component: UserSearchflightComponent},
  {path: 'displayflights', component: UserDisplayflightinfoComponent},
  {path: 'displayflights/:id', component: UserReservationdetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FlightComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    UserDisplayflightinfoComponent,
    UserSearchflightComponent,
    UserReservationdetailsComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
