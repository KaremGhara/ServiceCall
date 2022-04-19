import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/beans/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.sass']
})
export class CustomerDetailsComponent implements OnInit {
  breadscrums = [
    {
      title: 'My Profile',
      items: ['Customer'],
      active: 'Show technician',
    },
  ];
  customer:Customer=new Customer();
  

  constructor(private router: Router,private customerService: CustomerService){}
  ngOnInit(): void {
       
  }

  


  

}
