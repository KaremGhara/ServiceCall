import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LockedComponent } from './locked/locked.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { CustomerDetailsComponent } from '../customer/customer-details/customer-details.component';
import { AttachTechnicianToRequestsComponent } from '../admin/attach-technician-to-requests/attach-technician-to-requests.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'locked',
    component: LockedComponent
  },
  {
    path: 'page404',
    component: Page404Component
  },
  {
    path: 'page500',
    component: Page500Component
  },
  {
    path: 'customerDetails/:id',
    component: CustomerDetailsComponent
  }
  ,
  {
    path: 'admin/allTechnician',
    component: AttachTechnicianToRequestsComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
