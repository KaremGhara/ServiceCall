import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTechnicianComponent } from './add-technician/add-technician.component';
import { AllTechnicianComponent } from './all-technician/all-technician.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path:"allTechnician",
    component:AllTechnicianComponent
    },

    {
      path:"addTechnician",
      component:AddTechnicianComponent
      },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
