import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPangolinComponent } from './add-pangolin.component';

describe('AddPangolinComponent', () => {
  let component: AddPangolinComponent;
  let fixture: ComponentFixture<AddPangolinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPangolinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPangolinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
