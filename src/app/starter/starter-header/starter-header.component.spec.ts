import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterHeaderComponent } from './starter-header.component';

describe('StarterHeaderComponent', () => {
  let component: StarterHeaderComponent;
  let fixture: ComponentFixture<StarterHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarterHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
