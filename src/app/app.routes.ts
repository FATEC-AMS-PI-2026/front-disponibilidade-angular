import { Routes } from '@angular/router';

import { AccessLayout } from './core/layout/access-layout/access-layout';

import { AccessSelection } from './features/access/pages/access-selection/access-selection';
import { CoordinatorLogin } from './features/access/pages/coordinator-login/coordinator-login';
import { ProfessorLogin } from './features/access/pages/professor-login/professor-login';

import { ProfessorHome } from './features/professor/pages/professor-home/professor-home';
import { ProfessorProfile } from './features/professor/pages/professor-profile/professor-profile';

export const routes: Routes = [
  {
    path: '',
    component: AccessLayout,
    children: [
      {
        path: '',
        component: AccessSelection,
      },
      {
        path: 'login/professor',
        component: ProfessorLogin,
      },
      {
        path: 'login/coordenador',
        component: CoordinatorLogin,
      },
    ],
  },

  {
    path: 'professor/profile',
    component: ProfessorProfile,
  },

  {
    path: '**',
    redirectTo: '',
  },
];
