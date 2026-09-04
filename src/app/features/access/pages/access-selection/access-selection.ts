import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  LucideGraduationCap,
  LucideSettings2,
} from '@lucide/angular';

@Component({
  selector: 'app-access-selection',
  imports: [
    LucideGraduationCap,
    LucideSettings2,
  ],
  templateUrl: './access-selection.html',
  styleUrl: './access-selection.css',
})
export class AccessSelection {
  constructor(private readonly router: Router) { }

  protected accessAsProfessor(): void {
    this.router.navigate(['/login/professor']);
  }

  protected accessAsCoordinator(): void {
    this.router.navigate(['/login/coordinator']);
  }
}
