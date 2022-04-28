import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswerTechnicianComponent } from './answer-technician/answer-technician.component';
import { TechnicianDetailsComponent } from './technician-details/technician-details.component';

const routes: Routes = [
  {path:"technicianDetails/:id",component:TechnicianDetailsComponent},
  {path:"answerTechnician",component:AnswerTechnicianComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnicianRoutingModule { }
