import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspendedShopsPageComponent } from './suspended-shops-page.component';

describe('SuspendedShopsPageComponent', () => {
  let component: SuspendedShopsPageComponent;
  let fixture: ComponentFixture<SuspendedShopsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuspendedShopsPageComponent]
    });
    fixture = TestBed.createComponent(SuspendedShopsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
