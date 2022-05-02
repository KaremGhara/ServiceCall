import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/beans/customer';
import {RequsetCustomer} from 'src/app/beans/requset-customer';
import { CustomerService } from 'src/app/services/customer.service';
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
  Customer:Customer=new Customer();
  // minNumber=1000;
  // maxNumber=5000;
  breadscrums = [
    {
      title: 'Request Technician',
      items: ['Customer'],
      active: 'Request Technician',
    },
  ];
  

  constructor(private fb: FormBuilder,
    private router:Router,
    private route:ActivatedRoute,
    private newRequest:RequserCustomerService,
    private customerService:CustomerService,
     ) {
    this.ReqForm = this.fb.group({});
    this.ReqForm.addControl("CustomerName",new FormControl({value: this.Customer.userName,disabled:true}))
    this.ReqForm.addControl("email",new FormControl({value: this.Customer.email,disabled:true}))
    this.ReqForm.addControl("phone",new FormControl({value: this.Customer.userPhone,disabled:true}))
    this.ReqForm.addControl("problemDescription",new FormControl('',[Validators.required]))
    this.ReqForm.addControl("deviceType",new FormControl('',[Validators.required]))
    this.ReqForm.addControl("deviceName",new FormControl('',[Validators.required]))
    this.ReqForm.addControl("repairType",new FormControl('',[Validators.required]))
   }

  ngOnInit(): void {
    
    const storedItems= JSON.parse(localStorage.getItem('currentUser'))
    this.custId=storedItems.id;
    this.requestCustomer.date=this.requestDate;
    this.customerService.getCustomerById(this.custId).subscribe(data =>{
      this.Customer = data;
     });
  }

  Onsubmit() {
    this.requestCustomer.customerName=this.Customer.userName;
    this.requestCustomer.email=this.Customer.email;
    this.requestCustomer.phone=this.Customer.userPhone;  
    Swal.fire({
      title: 'לשלוח בקשה?',
      text: "לא תוכל לעדעכן או למחוק אותה",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6' ,
      cancelButtonColor: '#d33',
      confirmButtonText: 'כן לאשר'
    }).then((result) => {
      if (result.isConfirmed) {
        this.newRequest.addRequestCustomer(this.requestCustomer,this.custId).subscribe(res=>{
     
      
          if(res){
            
              
            Swal.fire({
              icon: 'success',
              title: 'הבקשה נשלחה ',
              text: 'להמתין לאישור המנהל',
    
          }
    
          
          );
          this.router.navigate(['customer/customerRequests'])
          }
        })
    
      }
    })

    

  }
  // getRandomArbitrary(min, max) : number {
  //   return Math.random() * (max - min) + min;
  // }
}
