import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllShopsPageComponent } from './all-shops-page.component';

describe('AllShopsPageComponent', () => {
  let component: AllShopsPageComponent;
  let fixture: ComponentFixture<AllShopsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllShopsPageComponent]
    });
    fixture = TestBed.createComponent(AllShopsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
