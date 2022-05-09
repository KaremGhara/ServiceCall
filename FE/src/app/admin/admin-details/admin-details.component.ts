import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/beans/Admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.sass']
})
export class AdminDetailsComponent implements OnInit {

  adminId:number;

  admin:Admin=new Admin();
  

  constructor(
    private router: Router,
    private adminService: AdminService,
    ){}
  ngOnInit(): void {
       const storedItems= JSON.parse(localStorage.getItem('currentUser'))
       this.adminId=storedItems.id;
       this.adminService.getAdminById(this.adminId).subscribe(data=>{
       this.admin=data;
         
       })
      
  }

  breadscrums = [
    {
      title: 'פרופיל שלי',
      items: ["פרופיל"],
      active: 'פרופיל שלי',
    },
  ];
  

  updateProfileAdmin(){
    this.router.navigate(['admin/updateAdmin'])
  }


}
