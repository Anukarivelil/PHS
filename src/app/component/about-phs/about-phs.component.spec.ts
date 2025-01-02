import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPhsComponent } from './about-phs.component';

describe('AboutPhsComponent', () => {
  let component: AboutPhsComponent;
  let fixture: ComponentFixture<AboutPhsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPhsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPhsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
