import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReservationdetailsComponent } from './user-reservationdetails.component';

describe('UserReservationdetailsComponent', () => {
  let component: UserReservationdetailsComponent;
  let fixture: ComponentFixture<UserReservationdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReservationdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReservationdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
