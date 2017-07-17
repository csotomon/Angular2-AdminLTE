import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterLeftSideComponent } from './starter-left-side.component';

describe('StarterLeftSideComponent', () => {
  let component: StarterLeftSideComponent;
  let fixture: ComponentFixture<StarterLeftSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarterLeftSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterLeftSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
