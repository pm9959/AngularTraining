import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewAuthGuard } from './new-auth.guard';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CanactivateparentComponent } from './canactivateparent/canactivateparent.component';
import { CanActivatechildTestGuard } from './can-activatechild-test.guard';
import { CanActfirstchildComponent } from './can-actfirstchild/can-actfirstchild.component';
import { CanActsecondchildComponent } from './can-actsecondchild/can-actsecondchild.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  { path: 'header', component: HeaderComponent ,canActivate:[NewAuthGuard] },
  {path:'canactivateparent',component:CanactivateparentComponent
,canActivateChild:[CanActivatechildTestGuard], children:[{path:'canactfirstchild',component:CanActfirstchildComponent},
{path:'canactsecondchild',component:CanActsecondchildComponent}]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
