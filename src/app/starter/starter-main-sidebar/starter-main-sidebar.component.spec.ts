import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterMainSidebarComponent } from './starter-main-sidebar.component';

describe('StarterMainSidebarComponent', () => {
  let component: StarterMainSidebarComponent;
  let fixture: ComponentFixture<StarterMainSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarterMainSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterMainSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
