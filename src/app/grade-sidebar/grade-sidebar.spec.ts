import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeSidebar } from './grade-sidebar';

describe('GradeSidebar', () => {
  let component: GradeSidebar;
  let fixture: ComponentFixture<GradeSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradeSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradeSidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
