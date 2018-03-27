import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterSidebarComponent } from './starter-sidebar.component';

describe('StarterSidebarComponent', () => {
  let component: StarterSidebarComponent;
  let fixture: ComponentFixture<StarterSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarterSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
