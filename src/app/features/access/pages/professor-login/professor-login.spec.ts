import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfessorLogin } from './professor-login';

describe('ProfessorLogin', () => {
  let component: ProfessorLogin;
  let fixture: ComponentFixture<ProfessorLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessorLogin],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfessorLogin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
