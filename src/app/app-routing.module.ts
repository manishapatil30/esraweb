import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { HeaderlinkComponent } from './headerlink/headerlink.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { StartpageComponent } from './startpage/startpage.component';

const routes: Routes = [
  { path: '', redirectTo: '/home/dashboard', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'about', component: StartpageComponent
      },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      // {
      //   path: 'login', children: [
      //     { path: '', component: LoginComponent },
      //     { path: 'forgot', component: ForgotpassComponent }
      //   ]
      // },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
