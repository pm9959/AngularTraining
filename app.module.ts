import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { CanactivateparentComponent } from './canactivateparent/canactivateparent.component';
import { CanActfirstchildComponent } from './can-actfirstchild/can-actfirstchild.component';
import { CanActsecondchildComponent } from './can-actsecondchild/can-actsecondchild.component';
import { InterceptorComponent } from './interceptor/interceptor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    HeaderComponent,
    CanactivateparentComponent,
    CanActfirstchildComponent,
    CanActsecondchildComponent,
    InterceptorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
