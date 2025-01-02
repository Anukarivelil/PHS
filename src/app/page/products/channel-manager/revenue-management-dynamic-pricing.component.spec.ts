import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueManagementDynamicPricingComponent } from './revenue-management-dynamic-pricing.component';

describe('RevenueManagementDynamicPricingComponent', () => {
  let component: RevenueManagementDynamicPricingComponent;
  let fixture: ComponentFixture<RevenueManagementDynamicPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevenueManagementDynamicPricingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenueManagementDynamicPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
