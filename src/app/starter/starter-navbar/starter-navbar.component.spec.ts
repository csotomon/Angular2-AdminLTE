import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterNavbarComponent } from './starter-navbar.component';

describe('StarterNavbarComponent', () => {
  let component: StarterNavbarComponent;
  let fixture: ComponentFixture<StarterNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarterNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
