import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduntMainComponent } from './produnt-main.component';

describe('ProduntMainComponent', () => {
  let component: ProduntMainComponent;
  let fixture: ComponentFixture<ProduntMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduntMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduntMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
