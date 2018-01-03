import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { LoginModule } from './login/login.module';
import { SelectModule } from './select/select.module';
import { GameModule } from './game/game.module';
import { FabricModule } from 'ngx-fabric-wrapper';
import { FABRIC_CONFIG } from 'ngx-fabric-wrapper';
import { FabricConfigInterface } from 'ngx-fabric-wrapper';

const DEFAULT_FABRIC_CONFIG: FabricConfigInterface = {
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot(),
    NgbModule.forRoot(),
    CoreModule,
    SharedModule,
    HomeModule,
    AboutModule,
    GameModule,
    SelectModule,
    LoginModule,
    FabricModule,
    AppRoutingModule
  ],
  declarations: [AppComponent],
  providers: [
    {
      provide: FABRIC_CONFIG,
      useValue: DEFAULT_FABRIC_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
