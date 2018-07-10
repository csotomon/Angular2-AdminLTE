import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeMainSidebarComponent } from './theme-main-sidebar.component';

describe('ThemeMainSidebarComponent', () => {
  let component: ThemeMainSidebarComponent;
  let fixture: ComponentFixture<ThemeMainSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeMainSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeMainSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
