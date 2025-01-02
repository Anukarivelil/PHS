import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAdvantageComponent } from './product-advantage.component';

describe('ProductAdvantageComponent', () => {
  let component: ProductAdvantageComponent;
  let fixture: ComponentFixture<ProductAdvantageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductAdvantageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAdvantageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
