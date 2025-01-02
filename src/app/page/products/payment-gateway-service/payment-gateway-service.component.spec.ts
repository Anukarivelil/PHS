import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentGatewayServiceComponent } from './payment-gateway-service.component';

describe('PaymentGatewayServiceComponent', () => {
  let component: PaymentGatewayServiceComponent;
  let fixture: ComponentFixture<PaymentGatewayServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentGatewayServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentGatewayServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
