import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/beans/customer';
import { RequsetCustomer } from 'src/app/beans/requset-customer';
import { CustomerService } from 'src/app/services/customer.service';
import { RequserCustomerService } from 'src/app/services/requser-customer.service';
import { AnswerTechnician } from 'src/app/beans/answer-technician';
import { AnswerTechnicianService } from 'src/app/services/answer-technician.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-answer-technician',
  templateUrl: './answer-technician.component.html',
  styleUrls: ['./answer-technician.component.sass']
})
export class AnswerTechnicianComponent implements OnInit {
  breadscrums = [
    {
      title: 'Answer technician',
      items: ['technician'],
      active: 'Answer technician',
    },
  ];
  answerTechnician:AnswerTechnician= new AnswerTechnician();
  idrow:number;
  requestCustomer:RequsetCustomer=new RequsetCustomer();
  ReqForm: FormGroup;
  requestDate=new Date(); 
  techtId:number
  Customer:Customer=new Customer();
  constructor(private fb: FormBuilder,
    private router:Router,
    private route:ActivatedRoute,
    private RequestService:RequserCustomerService,
    private customerService:CustomerService,
    private answerTechnicianService:AnswerTechnicianService,
     ) {
    this.ReqForm = this.fb.group({});
    this.ReqForm.addControl("CustomerName",new FormControl({value: this.requestCustomer.customerName,disabled:true}))
    this.ReqForm.addControl("email",new FormControl({value: this.requestCustomer.email,disabled:true}))
    this.ReqForm.addControl("phone",new FormControl({value: this.requestCustomer.phone,disabled:true}))
    this.ReqForm.addControl("deviceName",new FormControl({value: this.requestCustomer.deviceName,disabled:true}))
    this.ReqForm.addControl("deviceType",new FormControl({value: this.requestCustomer.deviceType,disabled:true}))
    this.ReqForm.addControl("repairType",new FormControl({value: this.requestCustomer.repairType,disabled:true}))
    this.ReqForm.addControl("id",new FormControl({value: this.requestCustomer.repairType,disabled:true}))
    this.ReqForm.addControl("problemDescription",new FormControl({value: this.requestCustomer.id,disabled:true}))
    this.ReqForm.addControl("comment",new FormControl('',[Validators.required]))
    this.ReqForm.addControl("isComplete",new FormControl('',[Validators.required]))

    
  }

  ngOnInit(): void {
    this.idrow=this.route.snapshot.params['id'];

    

    this.RequestService.getRequsetById(this.idrow).subscribe(data =>{
      this.requestCustomer = data;
     });
  }
  Onsubmit() {
        
    Swal.fire({
      title: "לשלוח תשובה?",
      text:'',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor:'#d33' ,
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'כן',
    }).then((result) => {
      if (result.value) { 
    this.answerTechnician.repairCode=this.requestCustomer.id;
    this.answerTechnician.repairInfo=this.requestCustomer.repairType;
    this.answerTechnician.date=this.requestDate;   
    this.answerTechnicianService.addAnswerTechnician(this.answerTechnician).subscribe(res=>{
          if(!res){
            Swal.fire('בהצלחה',' התשובה נשלחה', 'success');                
          }
        }) 
      }
    });    

}
}
