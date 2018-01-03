import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

import { GameRoutingModule } from './game-routing.module';

import { BrowserModule } from '@angular/platform-browser';

import { FabricModule, FabricConfigInterface, FABRIC_CONFIG } from 'ngx-fabric-wrapper';

const DEFAULT_FABRIC_CONFIG: FabricConfigInterface = {
  allowTouchScrolling: true
};

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    FabricModule,

    GameRoutingModule
  ],
  declarations: [GameComponent],
  providers: [
    {
      provide: FABRIC_CONFIG,
      useValue: DEFAULT_FABRIC_CONFIG
    }
  ]
})
export class GameModule { }
