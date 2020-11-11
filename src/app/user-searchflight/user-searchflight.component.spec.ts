import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchflightComponent } from './user-searchflight.component';

describe('UserSearchflightComponent', () => {
  let component: UserSearchflightComponent;
  let fixture: ComponentFixture<UserSearchflightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSearchflightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
