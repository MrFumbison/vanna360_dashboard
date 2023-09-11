import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialShopsPageComponent } from './trial-shops-page.component';

describe('TrialShopsPageComponent', () => {
  let component: TrialShopsPageComponent;
  let fixture: ComponentFixture<TrialShopsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrialShopsPageComponent]
    });
    fixture = TestBed.createComponent(TrialShopsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
