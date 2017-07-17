import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminControlSidebarComponent } from './admin-control-sidebar.component';

describe('AdminControlSidebarComponent', () => {
  let component: AdminControlSidebarComponent;
  let fixture: ComponentFixture<AdminControlSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminControlSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminControlSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
