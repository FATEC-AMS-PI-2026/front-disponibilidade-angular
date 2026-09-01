import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Status = 'indisponivel' | 'disponivel' | 'ressalva';

interface Celula {
  status: Status;
}

interface LinhaHorario {
  horario: string;
  celulas: Celula[];
}

@Component({
  selector: 'app-grade-horarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grade-horarios.html',
  styleUrl: './grade-horarios.css'
})
export class GradeHorarios {

  dias = [
    'Seg',
    'Ter',
    'Qua',
    'Qui',
    'Sex',
    'Sab'
  ];

  horarios: LinhaHorario[] = [

    {
      horario: '13h20',
      celulas: [
        { status: 'indisponivel' },
        { status: 'disponivel' },
        { status: 'indisponivel' },
        { status: 'indisponivel' },
        { status: 'indisponivel' },
        { status: 'disponivel' }
      ]
    },

    {
      horario: '15h00',
      celulas: [
        { status: 'indisponivel' },
        { status: 'disponivel' },
        { status: 'indisponivel' },
        { status: 'disponivel' },
        { status: 'indisponivel' },
        { status: 'disponivel' }
      ]
    },

    {
      horario: '17h00',
      celulas: [
        { status: 'indisponivel' },
        { status: 'indisponivel' },
        { status: 'disponivel' },
        { status: 'indisponivel' },
        { status: 'ressalva' },
        { status: 'indisponivel' }
      ]
    }

  ];

  alterarStatus(celula: Celula): void {

    if (celula.status === 'disponivel') {
      celula.status = 'indisponivel';
      return;
    }

    if (celula.status === 'indisponivel') {
      celula.status = 'disponivel';
      return;
    }

    if (celula.status === 'ressalva') {
      celula.status = 'disponivel';
    }

  }

}