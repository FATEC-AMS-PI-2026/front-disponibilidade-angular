import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: 'salas', pathMatch: 'full' },
  {
    path: 'salas',
    loadComponent: () =>
      import('./features/salas/lista-salas/lista-salas').then((m) => m.ListaSalas),
  },
  {
    path: 'salas/:id',
    loadComponent: () =>
      import('./features/salas/detalhes-sala/detalhes-sala').then((m) => m.DetalhesSala),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
