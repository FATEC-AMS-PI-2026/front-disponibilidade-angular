import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfessorAvailability } from './professor-availability';

describe('ProfessorAvailability', () => {
  let component: ProfessorAvailability;
  let fixture: ComponentFixture<ProfessorAvailability>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessorAvailability],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfessorAvailability);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
