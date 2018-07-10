import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeControlSidebarComponent } from './theme-control-sidebar.component';

describe('ThemeControlSidebarComponent', () => {
  let component: ThemeControlSidebarComponent;
  let fixture: ComponentFixture<ThemeControlSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeControlSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeControlSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
