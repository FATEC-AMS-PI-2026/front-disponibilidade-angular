import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfessorHome } from './professor-home';

describe('ProfessorHome', () => {
  let component: ProfessorHome;
  let fixture: ComponentFixture<ProfessorHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessorHome],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfessorHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
