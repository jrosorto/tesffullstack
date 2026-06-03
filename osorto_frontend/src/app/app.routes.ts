import { Routes } from '@angular/router';
import { PersonListComponent } from './components/person-list/person-list';
import { PersonFormComponent } from './components/person-form/person-form';

export const routes: Routes = [
  { path: '', redirectTo: 'persons', pathMatch: 'full' },
  { path: 'persons', component: PersonListComponent },
  { path: 'persons/new', component: PersonFormComponent },
  { path: 'persons/edit/:id', component: PersonFormComponent },
];
