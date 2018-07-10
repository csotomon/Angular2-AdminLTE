import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeDashboardv1Component } from './theme-dashboardv1.component';

describe('ThemeDashboardv1Component', () => {
  let component: ThemeDashboardv1Component;
  let fixture: ComponentFixture<ThemeDashboardv1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeDashboardv1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeDashboardv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
