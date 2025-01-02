import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingandReservationManagementComponent } from './marketingand-reservation-management.component';

describe('MarketingandReservationManagementComponent', () => {
  let component: MarketingandReservationManagementComponent;
  let fixture: ComponentFixture<MarketingandReservationManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketingandReservationManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketingandReservationManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
