import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmAboutComponent } from './hm-about.component';

describe('HmAboutComponent', () => {
  let component: HmAboutComponent;
  let fixture: ComponentFixture<HmAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HmAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HmAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
