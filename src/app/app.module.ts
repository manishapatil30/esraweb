import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { HeaderlinkComponent } from './headerlink/headerlink.component';
import { ContantComponent } from './contant/contant.component';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { StartpageComponent } from './startpage/startpage.component';

import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';

import { CheckBoxModule, ButtonModule } from '@syncfusion/ej2-angular-buttons';

import { RouterModule } from '@angular/router';
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from '@angular-material-components/datetime-picker';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { UserdetailsscreenComponent } from './userdetailsscreen/userdetailsscreen.component';
import { DetailsscreenComponent } from './detailsscreen/detailsscreen.component';
import { HeaderComponent } from './header/header.component';
import { EditofferComponent } from './editoffer/editoffer.component';
import { CalendorComponent } from './calendor/calendor.component';
import { EditsalonComponent } from './editsalon/editsalon.component';
import { SavesalonComponent } from './savesalon/savesalon.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { SaveprofileComponent } from './saveprofile/saveprofile.component';
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { Moment } from 'moment';
import * as moment from 'moment';
import { NumberDirective } from './validators/numbersOnly.directive';
// import * as moment from 'moment';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    HeaderlinkComponent,
    ContantComponent,
    LoginComponent,
    SignupComponent,
    StartpageComponent,
    UserdetailsscreenComponent,
    DetailsscreenComponent,
    HeaderComponent,
    EditofferComponent,
    CalendorComponent,
    EditsalonComponent,
    SavesalonComponent,
    UserprofileComponent,
    SaveprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    CommonModule,
    RouterModule,
    MultiSelectModule,
    MatSelectModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
  NgxMaterialTimepickerModule,
  
  ],
  exports: [
    MatMomentDateModule,
    // ...
  ],
  providers: [HttpClientModule,
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
