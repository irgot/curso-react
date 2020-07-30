import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExposureManagementComponent } from './exposure-management.component';

describe('ExposureManagementComponent', () => {
  let component: ExposureManagementComponent;
  let fixture: ComponentFixture<ExposureManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExposureManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExposureManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
