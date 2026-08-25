import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GradeSidebar } from './grade-sidebar/grade-sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GradeSidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Disponibility');
}