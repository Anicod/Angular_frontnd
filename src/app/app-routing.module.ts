import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetallnotesComponent } from './components/getallnotes/getallnotes.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';


const routes: Routes = [
  {path : 'register', component : RegisterComponent},
  {path : 'login', component : LoginComponent},
  {path : 'forgot', component : ForgotComponent},
  {path : 'dashboard', component : DashboardComponent,
  children:[
    {path : 'getallnotes', component : GetallnotesComponent},
    {path : 'archive', component : ArchiveComponent},
    {path : 'trash', component : TrashComponent},
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
