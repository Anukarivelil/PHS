import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoShowRevenueProtectionComponent } from './no-show-revenue-protection.component';

describe('NoShowRevenueProtectionComponent', () => {
  let component: NoShowRevenueProtectionComponent;
  let fixture: ComponentFixture<NoShowRevenueProtectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoShowRevenueProtectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoShowRevenueProtectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
