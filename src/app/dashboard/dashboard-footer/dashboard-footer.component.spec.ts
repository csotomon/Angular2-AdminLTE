import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFooterComponent } from './dashboard-footer.component';

describe('DashboardFooterComponent', () => {
  let component: DashboardFooterComponent;
  let fixture: ComponentFixture<DashboardFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
