import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AdminAddFlightComponent } from './admin-addFlight/admin-addFlight.component';
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
import { ReservationSuccessComponent } from './reservation-success/reservation-success.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'flight', component: AdminAddFlightComponent},
  {path: 'registration', component: UserRegistrationComponent},
  {path: 'login', component: UserLoginComponent},
  {path: 'searchflight', component: UserSearchflightComponent},
  {path: 'displayflights', component: UserDisplayflightinfoComponent},
  {path: 'displayflights/:id', component: UserReservationdetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AdminAddFlightComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    UserDisplayflightinfoComponent,
    UserSearchflightComponent,
    UserReservationdetailsComponent,
    ReservationSuccessComponent,
    HomeComponent,
    NavbarComponent
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
    MatButtonModule,
    MatDialogModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
