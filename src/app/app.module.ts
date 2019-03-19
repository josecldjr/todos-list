import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule }  from '@angular/material';
import { MainNavComponent } from './common/components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

import { TotosListComponent } from './page/totos-list/totos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    TotosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
