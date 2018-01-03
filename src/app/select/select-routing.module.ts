import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { SelectComponent } from './select.component';

const routes: Routes = Route.withShell([
  { path: '', redirectTo: '/select', pathMatch: 'full' },
  { path: 'select', component: SelectComponent, data: { title: extract('Select') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SelectRoutingModule { }
