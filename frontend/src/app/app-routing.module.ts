import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InterfazComponent } from './pages/interfaz/interfaz.component';

const routes: Routes = [
  {path: '', redirectTo: '/interfaz', pathMatch:'full'},
  {path:'interfaz', component:InterfazComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
