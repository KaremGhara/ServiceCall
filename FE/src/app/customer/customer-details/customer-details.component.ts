import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/beans/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.sass']
})
export class CustomerDetailsComponent implements OnInit {
  custId:number;

  customer:Customer=new Customer();
  

  constructor(private router: Router,private customerService: CustomerService,private route:ActivatedRoute){}
  ngOnInit(): void {
       this.custId=this.route.snapshot.params['id'];
       this.customerService.getCustomerById(this.custId).subscribe(data=>{
         this.customer=data;
         
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
