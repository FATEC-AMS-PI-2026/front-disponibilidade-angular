import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfessorProfile } from './professor-profile';

describe('ProfessorProfile', () => {
  let component: ProfessorProfile;
  let fixture: ComponentFixture<ProfessorProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessorProfile],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfessorProfile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
