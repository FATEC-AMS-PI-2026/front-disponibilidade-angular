import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccessSelection } from './access-selection';

describe('AccessSelection', () => {
  let component: AccessSelection;
  let fixture: ComponentFixture<AccessSelection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessSelection],
    }).compileComponents();

    fixture = TestBed.createComponent(AccessSelection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
