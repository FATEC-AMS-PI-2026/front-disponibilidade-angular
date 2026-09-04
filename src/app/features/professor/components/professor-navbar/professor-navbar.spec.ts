import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfessorNavbar } from './professor-navbar';

describe('ProfessorNavbar', () => {
  let component: ProfessorNavbar;
  let fixture: ComponentFixture<ProfessorNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessorNavbar],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfessorNavbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
