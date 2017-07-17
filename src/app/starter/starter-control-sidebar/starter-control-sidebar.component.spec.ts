import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterControlSidebarComponent } from './starter-control-sidebar.component';

describe('StarterControlSidebarComponent', () => {
  let component: StarterControlSidebarComponent;
  let fixture: ComponentFixture<StarterControlSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarterControlSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterControlSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
