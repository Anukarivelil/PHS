import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductKeyDetailsComponent } from './product-key-details.component';

describe('ProductKeyDetailsComponent', () => {
  let component: ProductKeyDetailsComponent;
  let fixture: ComponentFixture<ProductKeyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductKeyDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductKeyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
