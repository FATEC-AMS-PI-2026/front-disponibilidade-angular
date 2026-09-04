import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  LucideChevronDown,
  LucideUserRound,
} from '@lucide/angular';

import { ProfessorNavbar } from '../../components/professor-navbar/professor-navbar';

interface ScheduleItem {
  day: string;
  row: number;
  subject: string;
  room: string;
}

@Component({
  selector: 'app-professor-profile',
  imports: [
    FormsModule,
    ProfessorNavbar,
    LucideChevronDown,
    LucideUserRound,
  ],
  templateUrl: './professor-profile.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfessorProfile {
  readonly professorName = 'WALTER HARTWELL WHITE';

  readonly weekDays = [
    'Seg',
    'Ter',
    'Qua',
    'Qui',
    'Sex',
    'Sab',
  ];

  readonly timeSlots = [
    '13h20 - 14h50',
    '15h00 - 16h50',
    '17h00 - 18h40',
  ];

  readonly subjects = [
    'Engenharia de Software',
    'Estrutura de Dados',
    'Computação em nuvem',
  ];

  readonly units = [
    '176 - DOM AMAURY CASTANHO',
    'FATEC JOSÉ CRESPO GONZALES',
  ];

  readonly semesters = [
    'SEMESTRE 2026.1',
    'SEMESTRE 2025.2',
  ];

  selectedUnit = this.units[0];
  selectedSemester = this.semesters[0];

  readonly schedules: ScheduleItem[] = [
    {
      day: 'Ter',
      row: 0,
      subject: 'ESTRUTURA DE DADOS',
      room: 'LAB 3',
    },
    {
      day: 'Ter',
      row: 1,
      subject: 'ESTRUTURA DE DADOS',
      room: 'LAB 3',
    },
    {
      day: 'Qua',
      row: 2,
      subject: 'COMPUTAÇÃO EM NUVEM',
      room: 'LAB 2',
    },
    {
      day: 'Qui',
      row: 1,
      subject: 'ESTRUTURA DE DADOS',
      room: 'LAB 3',
    },
    {
      day: 'Sab',
      row: 0,
      subject: 'ENGENHARIA DE SOFTWARE',
      room: 'SALA 2',
    },
    {
      day: 'Sab',
      row: 1,
      subject: 'ENGENHARIA DE SOFTWARE',
      room: 'SALA 2',
    },
  ];

  getSchedule(
    day: string,
    row: number,
  ): ScheduleItem | undefined {
    return this.schedules.find(
      (schedule) =>
        schedule.day === day &&
        schedule.row === row,
    );
  }
}
