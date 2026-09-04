import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

import {
  LucideCalendarDays,
  LucideLogOut,
  LucideUserRound,
} from '@lucide/angular';

export type ProfessorNavItem = 'perfil' | 'disponibilidade';

@Component({
  selector: 'app-professor-navbar',
  imports: [
    LucideCalendarDays,
    LucideLogOut,
    LucideUserRound,
  ],
  templateUrl: './professor-navbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfessorNavbar {
  readonly activeItem = input<ProfessorNavItem>('perfil');

  readonly profileClick = output<void>();
  readonly availabilityClick = output<void>();
  readonly logoutClick = output<void>();
}
