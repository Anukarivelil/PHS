import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateTieUpsforHotelsComponent } from './corporate-tie-upsfor-hotels.component';

describe('CorporateTieUpsforHotelsComponent', () => {
  let component: CorporateTieUpsforHotelsComponent;
  let fixture: ComponentFixture<CorporateTieUpsforHotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorporateTieUpsforHotelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporateTieUpsforHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
