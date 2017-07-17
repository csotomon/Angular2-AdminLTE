import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLeftSideComponent } from './admin-left-side.component';

describe('AdminLeftSideComponent', () => {
  let component: AdminLeftSideComponent;
  let fixture: ComponentFixture<AdminLeftSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLeftSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLeftSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
