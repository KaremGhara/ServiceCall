import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswerTechnicianComponent } from './answer-technician/answer-technician.component';
import { MyRequestsComponent } from './my-requests/my-requests.component';
import { TechnicianDetailsComponent } from './technician-details/technician-details.component';
import { UpdateProfileTechnicianComponent } from './update-profile-technician/update-profile-technician.component';

const routes: Routes = [
  {path:"technicianDetails",component:TechnicianDetailsComponent},
  {path:"answerTechnician/:id",component:AnswerTechnicianComponent},
  {path:"myRequests",component:MyRequestsComponent},
  {path:"updateProfileTechnician",component:UpdateProfileTechnicianComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnicianRoutingModule { }
