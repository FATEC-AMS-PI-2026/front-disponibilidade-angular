import { Component } from '@angular/core';

@Component({
  selector: 'app-resumo-grade',
  standalone: true,
  imports: [],
  templateUrl: './resumo-grade.html',
  styleUrl: './resumo-grade.css'
})
export class ResumoGrade {

  totalSelecionado = 7.5;
  minimoSemanal = 6.25;
  limiteMensal = 65;

}