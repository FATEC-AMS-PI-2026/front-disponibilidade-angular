import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Sidebar } from './components/sidebar/sidebar';
import { HeaderDisponibilidade } from './components/header-disponibilidade/header-disponibilidade';
import { GradeHorarios } from './components/grade-horarios/grade-horarios';
import { PrazoAlteracao } from './components/prazo-alteracao/prazo-alteracao';
import { ResumoGrade } from './components/resumo-grade/resumo-grade';
import { Aviso } from './components/aviso/aviso';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Sidebar,
    HeaderDisponibilidade,
    GradeHorarios,
    PrazoAlteracao,
    ResumoGrade,
    Aviso
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}