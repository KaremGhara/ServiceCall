import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { RequestTechComponent } from './request-tech/request-tech.component';

const routes: Routes = [
  {path:"customerDetails/:id",component:CustomerDetailsComponent},
  {path:"requestTech",component:RequestTechComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
