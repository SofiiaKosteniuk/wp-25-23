
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeadComponent} from "./head/head.component";
import {RegistrationComponent} from "./registration/registration.component";
export const routes: Routes = [
  { path: '', component: HeadComponent },
  { path: 'head', component: HeadComponent },
  {
    path: 'registration',
    loadComponent: () => import('./registration/registration.component').then(m => m.RegistrationComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
