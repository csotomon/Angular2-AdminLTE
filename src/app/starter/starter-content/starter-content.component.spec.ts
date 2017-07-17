import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterContentComponent } from './starter-content.component';

describe('StarterContentComponent', () => {
  let component: StarterContentComponent;
  let fixture: ComponentFixture<StarterContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarterContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
