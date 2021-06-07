import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { QuoteComponent } from './quotebox/quote/quote.component';
import {GuardGuard} from './services/guard.guard';

const routes: Routes = [
  {
    path:'', component:LoginComponent
  },

  {
    path:'register', component:RegisterComponent

  },

  {
    path:'quote', canActivate:[GuardGuard], component:QuoteComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
