import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardControlSidebarComponent } from './dashboard-control-sidebar.component';

describe('DashboardControlSidebarComponent', () => {
  let component: DashboardControlSidebarComponent;
  let fixture: ComponentFixture<DashboardControlSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardControlSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardControlSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
