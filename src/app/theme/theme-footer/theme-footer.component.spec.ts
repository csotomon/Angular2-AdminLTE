import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeFooterComponent } from './theme-footer.component';

describe('ThemeFooterComponent', () => {
  let component: ThemeFooterComponent;
  let fixture: ComponentFixture<ThemeFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
