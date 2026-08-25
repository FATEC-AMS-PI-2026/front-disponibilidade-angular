import { Component } from '@angular/core';

import { PrazoAlteracao } from './prazo-alteracao/prazo-alteracao';
import { ResumoGrade } from './resumo-grade/resumo-grade';
import { Aviso } from './aviso/aviso';

@Component({
  selector: 'app-root',

  imports: [
    PrazoAlteracao,
    ResumoGrade,
    Aviso
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}