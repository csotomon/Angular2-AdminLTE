import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeContentComponent } from './theme-content.component';

describe('ThemeContentComponent', () => {
  let component: ThemeContentComponent;
  let fixture: ComponentFixture<ThemeContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
