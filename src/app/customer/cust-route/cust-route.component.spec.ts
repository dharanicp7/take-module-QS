import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustRouteComponent } from './cust-route.component';

describe('CustRouteComponent', () => {
  let component: CustRouteComponent;
  let fixture: ComponentFixture<CustRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
