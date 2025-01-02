import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmProductComponent } from './hm-product.component';

describe('HmProductComponent', () => {
  let component: HmProductComponent;
  let fixture: ComponentFixture<HmProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HmProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HmProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
