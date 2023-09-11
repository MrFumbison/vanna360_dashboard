import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllShopsPageComponent } from './all-shops-page/all-shops-page.component';
import { ActiveShopsPageComponent } from './active-shops-page/active-shops-page.component';
import { PremiumShopsPageComponent } from './premium-shops-page/premium-shops-page.component';
import { SuspendedShopsPageComponent } from './suspended-shops-page/suspended-shops-page.component';
import { TrialShopsPageComponent } from './trial-shops-page/trial-shops-page.component';

import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModalComponent } from './modal/modal.component';
@NgModule({
  declarations: [
    AppComponent,
    AllShopsPageComponent,
    ActiveShopsPageComponent,
    PremiumShopsPageComponent,
    SuspendedShopsPageComponent,
    TrialShopsPageComponent,
    SearchComponent,
    LoginComponent,
    DashboardComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
