import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnicianDetailsComponent } from './technician-details/technician-details.component';

const routes: Routes = [
  {path:"technicianDetails/:id",component:TechnicianDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnicianRoutingModule { }
