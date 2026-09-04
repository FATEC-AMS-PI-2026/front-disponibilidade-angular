import {
  ChangeDetectionStrategy,
  Component,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  LucideCalendarDays,
  LucideCheck,
  LucideChevronDown,
  LucidePencil,
} from '@lucide/angular';

import { ProfessorNavbar } from '../../components/professor-navbar/professor-navbar';

type AvailabilityStatus =
  | 'available'
  | 'negotiable'
  | 'unavailable';

interface AvailabilitySlot {
  day: string;
  row: number;
  status: AvailabilityStatus;
}

@Component({
  selector: 'app-professor-availability',
  imports: [
    FormsModule,
    ProfessorNavbar,
    LucideCalendarDays,
    LucideCheck,
    LucideChevronDown,
    LucidePencil,
  ],
  templateUrl: './professor-availability.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfessorAvailability {
  readonly weekDays = [
    'Seg',
    'Ter',
    'Qua',
    'Qui',
    'Sex',
    'Sab',
  ];

  readonly timeSlots = [
    '13h20',
    '15h00',
    '17h00',
  ];

  readonly periods = [
    'PERÍODO - AMS',
    'PERÍODO - MANHÃ',
    'PERÍODO - TARDE',
    'PERÍODO - NOITE',
  ];

  readonly units = [
    '176 - FATEC DOM AMAURY CASTANHO',
    'FATEC JOSÉ CRESPO GONZALES',
  ];

  readonly selectedPeriod = signal(
    this.periods[0],
  );

  readonly selectedUnit = signal(
    this.units[0],
  );

  readonly isEditing = signal(false);

  readonly deadline = '12/05/2026';

  readonly semester = 'Semestre 2026.2';

  readonly availability = signal<
    AvailabilitySlot[]
  >([
    {
      day: 'Ter',
      row: 0,
      status: 'available',
    },
    {
      day: 'Sab',
      row: 0,
      status: 'available',
    },
    {
      day: 'Ter',
      row: 1,
      status: 'available',
    },
    {
      day: 'Qui',
      row: 1,
      status: 'available',
    },
    {
      day: 'Sab',
      row: 1,
      status: 'available',
    },
    {
      day: 'Qua',
      row: 2,
      status: 'available',
    },
    {
      day: 'Sex',
      row: 2,
      status: 'negotiable',
    },
  ]);

  private editingSnapshot:
    AvailabilitySlot[] | null = null;

  getStatus(
    day: string,
    row: number,
  ): AvailabilityStatus {
    return (
      this.availability().find(
        (slot) =>
          slot.day === day &&
          slot.row === row,
      )?.status ?? 'unavailable'
    );
  }

  toggleEditing(): void {
    if (this.isEditing()) {
      this.isEditing.set(false);
      this.editingSnapshot = null;

      return;
    }

    this.editingSnapshot = structuredClone(
      this.availability(),
    );

    this.isEditing.set(true);
  }

  discardChanges(): void {
    if (this.editingSnapshot) {
      this.availability.set(
        this.editingSnapshot,
      );
    }

    this.editingSnapshot = null;
    this.isEditing.set(false);
  }

  toggleAvailability(
    day: string,
    row: number,
  ): void {
    if (!this.isEditing()) {
      return;
    }

    this.availability.update(
      (slots) => {
        const existing = slots.find(
          (slot) =>
            slot.day === day &&
            slot.row === row,
        );

        if (!existing) {
          return [
            ...slots,
            {
              day,
              row,
              status: 'available',
            },
          ];
        }

        const nextStatus: AvailabilityStatus =
          existing.status === 'unavailable'
            ? 'available'
            : existing.status === 'available'
              ? 'negotiable'
              : 'unavailable';

        return slots.map((slot) =>
          slot.day === day &&
            slot.row === row
            ? {
              ...slot,
              status: nextStatus,
            }
            : slot,
        );
      },
    );
  }

  get availableHours(): number {
    return (
      this.availability().filter(
        (slot) =>
          slot.status === 'available',
      ).length * 1.25
    );
  }
}
