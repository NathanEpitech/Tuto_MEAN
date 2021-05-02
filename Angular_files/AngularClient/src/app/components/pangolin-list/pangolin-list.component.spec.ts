import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PangolinListComponent } from './pangolin-list.component';

describe('PangolinListComponent', () => {
  let component: PangolinListComponent;
  let fixture: ComponentFixture<PangolinListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PangolinListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PangolinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
