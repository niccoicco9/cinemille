import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StoricoComponent } from './storico/storico.component';

const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'storico', component:StoricoComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
