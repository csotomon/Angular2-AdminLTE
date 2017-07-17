import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterFooterComponent } from './starter-footer.component';

describe('StarterFooterComponent', () => {
  let component: StarterFooterComponent;
  let fixture: ComponentFixture<StarterFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarterFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
