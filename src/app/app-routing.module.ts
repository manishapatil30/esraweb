import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { HeaderlinkComponent } from './headerlink/headerlink.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { StartpageComponent } from './startpage/startpage.component';
import { UserdetailsscreenComponent } from './userdetailsscreen/userdetailsscreen.component';
import { DetailsscreenComponent } from './detailsscreen/detailsscreen.component';
import { EditofferComponent } from './editoffer/editoffer.component';
import { CalendorComponent } from './calendor/calendor.component';
import { EditsalonComponent } from './editsalon/editsalon.component';
import { SavesalonComponent } from './savesalon/savesalon.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { HeaderComponent } from './header/header.component';
import { SaveprofileComponent } from './saveprofile/saveprofile.component';

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
      {
        path: 'header', component: HeaderComponent
      },
      // { path: 'userprofile/:vendorID', component: UserprofileComponent},
      {
        path : 'userprofile/:vendorID', children: [
          { path: '', component: UserprofileComponent },
          { path: 'saveprofile/:vendorID', component: SaveprofileComponent},
        ]
      },
      { path: 'login', component: LoginComponent },
      { path: 'details', children: [
          { path: '', component: DetailsscreenComponent },
          { path: 'edituser/:id', component: EditofferComponent },
          { path: 'editsalon/:vendorID', component: EditsalonComponent },
          {
            path : 'editsalon/:vendorID', children: [
              { path: '', component: EditsalonComponent },
              { path: 'savesalon', component: SavesalonComponent},
            ]
          },
        ]
      },
      { path: 'calendar', component: CalendorComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'edituser', component: EditofferComponent },
      { path: 'usdetail', component: UserdetailsscreenComponent },
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
