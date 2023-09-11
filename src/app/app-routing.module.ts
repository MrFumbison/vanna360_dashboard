import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllShopsPageComponent } from './all-shops-page/all-shops-page.component';
import { ActiveShopsPageComponent } from './active-shops-page/active-shops-page.component';
import { PremiumShopsPageComponent } from './premium-shops-page/premium-shops-page.component';
import { SuspendedShopsPageComponent } from './suspended-shops-page/suspended-shops-page.component';
import { TrialShopsPageComponent } from './trial-shops-page/trial-shops-page.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'', redirectTo: '/login', pathMatch: 'full'},
  // {path:'*', redirectTo: 'all_shops'},
  {path:'login', component:LoginComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path:'all_shops',component:AllShopsPageComponent},
  {path:'active_shops',component:ActiveShopsPageComponent},
  {path:'premium_shops',component:PremiumShopsPageComponent},
  {path:'suspended_shops',component:SuspendedShopsPageComponent},
  {path:'trial_shops',component:TrialShopsPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
