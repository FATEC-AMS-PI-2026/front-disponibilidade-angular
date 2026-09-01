import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDisponibilidade } from './header-disponibilidade';

describe('HeaderDisponibilidade', () => {
  let component: HeaderDisponibilidade;
  let fixture: ComponentFixture<HeaderDisponibilidade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderDisponibilidade]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderDisponibilidade);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
