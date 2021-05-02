import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PangolinDetailsComponent } from './pangolin-details.component';

describe('PangolinDetailsComponent', () => {
  let component: PangolinDetailsComponent;
  let fixture: ComponentFixture<PangolinDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PangolinDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PangolinDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
