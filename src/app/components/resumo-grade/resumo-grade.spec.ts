import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoGrade } from './resumo-grade';

describe('ResumoGrade', () => {
  let component: ResumoGrade;
  let fixture: ComponentFixture<ResumoGrade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumoGrade]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumoGrade);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
