import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerRequestsComponent } from './customer-requests/customer-requests.component';
import { RequestTechComponent } from './request-tech/request-tech.component';
import { UpdateCustomerDetailsComponent } from './update-customer-details/update-customer-details.component';

const routes: Routes = [
  {path:"customerDetails",component:CustomerDetailsComponent},
  {path:"requestTech",component:RequestTechComponent},
  {path:"customerRequests",component:CustomerRequestsComponent},
  {path:"upateCustomer",component:UpdateCustomerDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
