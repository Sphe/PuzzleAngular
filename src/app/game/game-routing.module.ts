import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { GameComponent } from './game.component';
import { FabricModule } from 'ngx-fabric-wrapper';
import { FABRIC_CONFIG } from 'ngx-fabric-wrapper';
import { FabricConfigInterface } from 'ngx-fabric-wrapper';

const DEFAULT_FABRIC_CONFIG: FabricConfigInterface = {
};

const routes: Routes = Route.withShell([
  { path: '', redirectTo: '/game', pathMatch: 'full' },
  { path: 'game', component: GameComponent, data: { title: extract('Game') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes), FabricModule],
  exports: [RouterModule],
  providers: [{
    provide: FABRIC_CONFIG,
    useValue: DEFAULT_FABRIC_CONFIG
  }]
})
export class GameRoutingModule { }
