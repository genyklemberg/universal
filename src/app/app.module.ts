import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TransferHttpCacheModule} from '@nguniversal/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FootballComponent } from './football/football.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FootballComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'sp-ssr' }),
    RouterModule,
    AppRoutingModule,
    TransferHttpCacheModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
