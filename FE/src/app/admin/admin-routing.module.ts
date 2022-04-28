import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTechnicianComponent } from './add-technician/add-technician.component';
import { AllTechnicianComponent } from './all-technician/all-technician.component';
import { UpdateTechnicianComponent } from './update-technician/update-technician.component';
import { AllCustomersComponent } from './all-customers/all-customers.component';
import { AllRequestsComponent } from './all-requests/all-requests.component';
import { AttachTechnicianToRequestsComponent } from './attach-technician-to-requests/attach-technician-to-requests.component';
import { AboutTechnicianComponent } from './about-technician/about-technician.component';

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
    {
      path:"allCustomers",
      component:AllCustomersComponent
    },
    {
      path:"allRequests",
      component:AllRequestsComponent
    },
    {
      path:"AttachTechician",
      component:AttachTechnicianToRequestsComponent
    },
    {
      path:"AboutTechnician/:idrow",
      component:AboutTechnicianComponent
    },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
