import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AccueilComponent } from './accueil/accueil.component';
import { RumeursComponent } from './rumeurs/rumeurs.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'rumeurs', component: RumeursComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserAnimationsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
