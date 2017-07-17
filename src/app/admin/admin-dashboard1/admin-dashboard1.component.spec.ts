import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboard1Component } from './admin-dashboard1.component';

describe('AdminDashboard1Component', () => {
  let component: AdminDashboard1Component;
  let fixture: ComponentFixture<AdminDashboard1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashboard1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
