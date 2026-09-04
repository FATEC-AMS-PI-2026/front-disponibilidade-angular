import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {
  LucideArrowLeft,
  LucideEye,
  LucideEyeOff,
  LucideKeyRound,
  LucideLockKeyhole,
  LucideMail,
} from '@lucide/angular';

@Component({
  selector: 'app-professor-login',
  imports: [
    FormsModule,
    RouterLink,
    LucideArrowLeft,
    LucideEye,
    LucideEyeOff,
    LucideKeyRound,
    LucideLockKeyhole,
    LucideMail,
  ],
  templateUrl: './professor-login.html',
  styleUrl: './professor-login.css',
})
export class ProfessorLogin {
  protected readonly showPassword = signal(false);
  protected readonly isSubmitting = signal(false);

  protected email = '';
  protected password = '';
  protected rememberAccess = false;

  constructor(private readonly router: Router) { }

  protected togglePasswordVisibility(): void {
    this.showPassword.update((visible) => !visible);
  }

  protected submit(): void {
    if (!this.email || !this.password) {
      return;
    }

    this.isSubmitting.set(true);

    setTimeout(() => {
      this.isSubmitting.set(false);
      this.router.navigate(['/professor/profile']);
    }, 600);
  }

  protected goBack(): void {
    this.router.navigate(['/']);
  }
}
