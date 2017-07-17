import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboard2Component } from './admin-dashboard2.component';

describe('AdminDashboard2Component', () => {
  let component: AdminDashboard2Component;
  let fixture: ComponentFixture<AdminDashboard2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashboard2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
