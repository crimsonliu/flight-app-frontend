import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDisplayflightinfoComponent } from './user-displayflightinfo.component';

describe('UserDisplayflightinfoComponent', () => {
  let component: UserDisplayflightinfoComponent;
  let fixture: ComponentFixture<UserDisplayflightinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDisplayflightinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDisplayflightinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
