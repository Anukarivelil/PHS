import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyFeatureComponent } from './key-feature.component';

describe('KeyFeatureComponent', () => {
  let component: KeyFeatureComponent;
  let fixture: ComponentFixture<KeyFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyFeatureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
