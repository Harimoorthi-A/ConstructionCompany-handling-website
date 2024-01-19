import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ViewProjectComponent } from './view-project/view-project.component';
import { LoginComponent } from './login/login.component';
import { CareerComponent } from './career/career.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { ProjectsComponent } from './projects/projects.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './dashboard/add/add.component';
import { EditComponent } from './dashboard/edit/edit.component';
import { ProjectlistComponent } from './dashboard/projectlist/projectlist.component';
import { EnqComponent } from './dashboard/enq/enq.component';
import { CarComponent } from './dashboard/car/car.component';
import { ProComponent } from './dashboard/pro/pro.component';
import { AddCarComponent } from './dashboard/add-car/add-car.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingpageComponent,
    ViewProjectComponent,
    LoginComponent,
    CareerComponent,
    EnquiryComponent,
    ProjectsComponent,
    DashboardComponent,
    AddComponent,
    EditComponent,
    ProjectlistComponent,
    EnqComponent,
    CarComponent,
    ProComponent,
    AddCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
