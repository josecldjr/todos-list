import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatSlideToggle, MatSlideToggleModule, MatExpansionModule, MatCheckbox, MatCheckboxModule }  from '@angular/material';
import { MainNavComponent } from './common/components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {MatTableModule, MatRowDef, MatRow} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';

import { TotosListComponent } from './page/totos-list/totos-list.component';
import { TodosService } from './service/todos/todos.service';
import { TodoDialogComponent } from './page/totos-list/todo-dialog/todo-dialog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    TotosListComponent,
    TodoDialogComponent,
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
    MatListModule,
    MatTableModule, 
    HttpClientModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule
  ],
  entryComponents: [
    TodoDialogComponent
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
