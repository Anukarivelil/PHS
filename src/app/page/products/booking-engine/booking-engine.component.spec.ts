import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingEngineComponent } from './booking-engine.component';

describe('BookingEngineComponent', () => {
  let component: BookingEngineComponent;
  let fixture: ComponentFixture<BookingEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingEngineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
