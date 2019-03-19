import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TotosListComponent } from './page/totos-list/totos-list.component';


const routes: Routes = [
  {path: '', component: TotosListComponent},
  {path: 'dashboard', component: TotosListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
