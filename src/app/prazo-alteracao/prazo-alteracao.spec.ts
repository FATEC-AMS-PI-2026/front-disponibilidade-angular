import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrazoAlteracao } from './prazo-alteracao';

describe('PrazoAlteracao', () => {
  let component: PrazoAlteracao;
  let fixture: ComponentFixture<PrazoAlteracao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrazoAlteracao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrazoAlteracao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
