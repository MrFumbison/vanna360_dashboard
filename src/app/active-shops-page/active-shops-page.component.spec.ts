import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveShopsPageComponent } from './active-shops-page.component';

describe('ActiveShopsPageComponent', () => {
  let component: ActiveShopsPageComponent;
  let fixture: ComponentFixture<ActiveShopsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveShopsPageComponent]
    });
    fixture = TestBed.createComponent(ActiveShopsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
