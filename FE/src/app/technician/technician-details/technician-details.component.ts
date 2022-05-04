import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Technician } from 'src/app/beans/technician';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-technician-details',
  templateUrl: './technician-details.component.html',
  styleUrls: ['./technician-details.component.sass']
})
export class TechnicianDetailsComponent implements OnInit {
  technicianId:number;

  technician:Technician=new Technician();
  

  constructor(private router: Router,private technicianService: TechnicianService,private route:ActivatedRoute){}
  ngOnInit(): void {
       const storedItems= JSON.parse(localStorage.getItem('currentUser'))
       this.technicianId=storedItems.id;
       this.technicianService.getTechnicianById(this.technicianId).subscribe(data=>{
       this.technician=data;
         
       })
      
  }

  breadscrums = [
    {
      title: 'פרופיל שלי',
      items: ["פרופיל"],
      active: 'פרופיל שלי',
    },
  ];
  



}
