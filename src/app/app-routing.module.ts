import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { CareerComponent } from './career/career.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { ViewProjectComponent } from './view-project/view-project.component';
import { ProjectsComponent } from './projects/projects.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './dashboard/add/add.component';
import { EditComponent } from './dashboard/edit/edit.component';
import { ProjectlistComponent } from './dashboard/projectlist/projectlist.component';
import { EnqComponent } from './dashboard/enq/enq.component';
import { CarComponent } from './dashboard/car/car.component';
import { ProComponent } from './dashboard/pro/pro.component';
import { AddCarComponent } from './dashboard/add-car/add-car.component';

const routes: Routes = [
  {path:'',component:LandingpageComponent},
  {path:'login',component:LoginComponent},
  {path:'career',component:CareerComponent},
  {path:'enquiry',component:EnquiryComponent},
  {path:'single-view/:id',component:ViewProjectComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'add-project',component:AddComponent},
  {path:'add-careers',component:AddCarComponent},
  {path:'edit-project/:id',component:EditComponent},
  {path:'allprojects',component:ProjectlistComponent},
  {path:'enquiries',component:EnqComponent},
  {path:'careers',component:CarComponent},
  {path:'dashboard-projects',component:ProComponent},
  {path:'**',redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
