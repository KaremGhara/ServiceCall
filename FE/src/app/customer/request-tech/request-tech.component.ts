import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {RequsetCustomer} from 'src/app/beans/requset-customer';
import {RequserCustomerService} from 'src/app/services/requser-customer.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-request-tech',
  templateUrl: './request-tech.component.html',
  styleUrls: ['./request-tech.component.sass']
})
export class RequestTechComponent implements OnInit {
  requestCustomer:RequsetCustomer=new RequsetCustomer();
  ReqForm: FormGroup;
  requestDate=new Date(); 
  custId:number
  breadscrums = [
    {
      title: 'Request Technician',
      items: ['Customer'],
      active: 'Request Technician',
    },
  ];
  

  constructor(private fb: FormBuilder,private router:Router,private route:ActivatedRoute,private newRequest:RequserCustomerService ) {
    this.ReqForm = this.fb.group({});
    this.ReqForm.addControl("CustomerName",new FormControl(''))
    this.ReqForm.addControl("email",new FormControl(''))
    this.ReqForm.addControl("phone",new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]))
    this.ReqForm.addControl("problemDescription",new FormControl('',[Validators.required]))
    this.ReqForm.addControl("deviceType",new FormControl('',[Validators.required]))
    this.ReqForm.addControl("deviceName",new FormControl('',[Validators.required]))
    this.ReqForm.addControl("repairType",new FormControl('',[Validators.required]))
   }

  ngOnInit(): void {
    
    const storedItems= JSON.parse(localStorage.getItem('currentUser'))
    this.custId=storedItems.id;
    console.log(this.custId);    
    this.requestCustomer.date=this.requestDate;
    
  }

  Onsubmit() {
    
    console.log(this.requestCustomer);
    
    this.newRequest.addRequestCustomer(this.requestCustomer).subscribe(res=>{
      console.log(res);
      
      if(res){
        
          
        Swal.fire({
          icon: 'success',
          title: 'הבקשה נשלחה ',
          text: 'להמתין לאישור המנהל',

      }

      
      );
      this.router.navigate(['customer/requestTech'])
      }
    })

  }
}
