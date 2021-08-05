import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillRouteComponent } from './bill-route.component';

describe('BillRouteComponent', () => {
  let component: BillRouteComponent;
  let fixture: ComponentFixture<BillRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
