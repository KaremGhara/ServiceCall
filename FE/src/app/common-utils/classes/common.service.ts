import { Injectable, ModuleWithProviders } from '@angular/core';
import { UserRole } from "./user-role";



export class CommonService {
 

  constructor() { }

  public getDefaultRoutByRole(role : UserRole):string
	{
		if ( role === UserRole.Admin) {
            return '/admin/allTechnician';
          } else if (role === UserRole.Customer) {
            return ('/customer/customerDetails');
          } else if (role === UserRole.Technician) {
            return '/student/dashboard';
          }
          else {
            return '/authentication/signin';
          }
	}
	
}
