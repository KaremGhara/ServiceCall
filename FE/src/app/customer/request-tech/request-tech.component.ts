import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {RequsetCustomer} from 'src/app/beans/requset-customer';
import {RequserCustomerService} from 'src/app/services/requser-customer.service'

@Component({
  selector: 'app-request-tech',
  templateUrl: './request-tech.component.html',
  styleUrls: ['./request-tech.component.sass']
})
export class RequestTechComponent implements OnInit {
  requestCustomer:RequsetCustomer=new RequsetCustomer();
  ReqForm: FormGroup;

  breadscrums = [
    {
      title: 'Request Technician',
      items: ['Customer'],
      active: 'Request Technician',
    },
  ];
  

  constructor(private fb: FormBuilder,private newRequest:RequserCustomerService ) {
    this.ReqForm = this.fb.group({});
    this.ReqForm.addControl("name",new FormControl(''))
    this.ReqForm.addControl("email",new FormControl(''))
    this.ReqForm.addControl("phone",new FormControl('', [Validators.required, Validators.minLength(9),Validators.maxLength(9)]))
    this.ReqForm.addControl("problemDescription",new FormControl('',[Validators.required]))
    this.ReqForm.addControl("deviceType",new FormControl('',[Validators.required]))
    this.ReqForm.addControl("description",new FormControl('',[Validators.required]))
    this.ReqForm.addControl("date",new FormControl('',[Validators.required]))
    this.ReqForm.addControl("isComplete",new FormControl('',[Validators.required]))
    this.ReqForm.addControl("repair",new FormControl('',[Validators.required]))
   }

  ngOnInit(): void {
  }

}
