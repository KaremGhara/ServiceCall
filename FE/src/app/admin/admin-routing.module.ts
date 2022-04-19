import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTechnicianComponent } from './add-technician/add-technician.component';
import { AllTechnicianComponent } from './all-technician/all-technician.component';
import { UpdateTechnicianComponent } from './update-technician/update-technician.component';

const routes: Routes = [
  
  {
    path:"allTechnician",
    component:AllTechnicianComponent
    },

    {
      path:"addTechnician",
      component:AddTechnicianComponent
    },
    {
      path:"updateTechnician/:idrow",
      component:UpdateTechnicianComponent
    },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
