import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeNavbarComponent } from './theme-navbar.component';

describe('ThemeNavbarComponent', () => {
  let component: ThemeNavbarComponent;
  let fixture: ComponentFixture<ThemeNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
