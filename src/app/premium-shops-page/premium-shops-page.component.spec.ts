import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumShopsPageComponent } from './premium-shops-page.component';

describe('PremiumShopsPageComponent', () => {
  let component: PremiumShopsPageComponent;
  let fixture: ComponentFixture<PremiumShopsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremiumShopsPageComponent]
    });
    fixture = TestBed.createComponent(PremiumShopsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
