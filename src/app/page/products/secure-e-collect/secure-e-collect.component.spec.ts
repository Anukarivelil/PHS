import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureECollectComponent } from './secure-e-collect.component';

describe('SecureECollectComponent', () => {
  let component: SecureECollectComponent;
  let fixture: ComponentFixture<SecureECollectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecureECollectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecureECollectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
