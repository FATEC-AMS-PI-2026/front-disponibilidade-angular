import {
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';
import {
  Router,
  RouterLink,
} from '@angular/router';

import {
  LucideCalendarDays,
  LucideLogOut,
  LucideUserRound,
} from '@lucide/angular';

export type ProfessorNavItem =
  | 'profile'
  | 'availability';

@Component({
  selector: 'app-professor-navbar',
  imports: [
    RouterLink,
    LucideCalendarDays,
    LucideLogOut,
    LucideUserRound,
  ],
  templateUrl: './professor-navbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfessorNavbar {
  readonly activeItem =
    input<ProfessorNavItem>('profile');

  constructor(
    private readonly router: Router,
  ) { }

  logout(): void {
    this.router.navigate(['/']);
  }
}
