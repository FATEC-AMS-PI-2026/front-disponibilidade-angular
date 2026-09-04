import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccessLayout } from './access-layout';

describe('AccessLayout', () => {
  let component: AccessLayout;
  let fixture: ComponentFixture<AccessLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(AccessLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
