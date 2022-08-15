import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/beans/customer';
import { CustomerService } from 'src/app/services/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-customer-details',
  templateUrl: './update-customer-details.component.html',
  styleUrls: ['./update-customer-details.component.sass']
})
export class UpdateCustomerDetailsComponent implements OnInit {
  breadscrums = [
    {
      title: 'עתקון',
      items: ["לקוח"],
      active: 'פרופיל לעתקון',
    },
  ];

  hide = true;
  updateCustomer:Customer=new Customer();
  custForm: FormGroup;
  idrow:number;
  adminId:number;
  ReqForm: any;
  custId:number;

  constructor(
    private fb: FormBuilder,
    private customerService:CustomerService,
    private router:Router
    ) {
    this.custForm = this.fb.group({});
    this.custForm.addControl("CustomerName",new FormControl({value: this.updateCustomer.userName,disabled:true}))
    this.custForm.addControl("email",new FormControl({value: this.updateCustomer.email,disabled:true}))
    this.custForm.addControl("phone",new FormControl('',[Validators.required, Validators.minLength(10),Validators.maxLength(10)]))
    this.custForm.addControl("address",new FormControl({value: this.updateCustomer.userAddress,disabled:false}))
    this.custForm.addControl("userImage",new FormControl({value: this.updateCustomer.userAddress,disabled:false}))
    this.custForm.addControl("password", new FormControl('', [Validators.required]))
    // this.custForm.addControl("password",new FormControl('',[Validators.required, Validators.minLength(6),Validators.maxLength(10)]))


   }

  ngOnInit(): void {
    const storedItems= JSON.parse(localStorage.getItem('currentUser'))
    this.custId=storedItems.id;
    this.customerService.getCustomerById(this.custId).subscribe(res=>{
      this.updateCustomer=res;
    })
  }

  SubmitupdateCustomer(){
   
      const storedItems= JSON.parse(localStorage.getItem('currentUser'))
      Swal.fire({
        title: " עדכון",
        text: " אתה רוצה לעדעכן?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor:'#d33' ,
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'כן',
      }).then((result) => {
        if (result.value) {            
          this.customerService.updateCustomer(this.updateCustomer).subscribe(res =>{
            if(res){

              this.router.navigate(["customer/customerDetails"])
              Swal.fire('עודכן!', storedItems.name+' עודכן.', 'success');

            }
          }) 
        }
      });    

      
 

  }
  async onFileInput()
  {
    const { value: file } = await Swal.fire({
      title: 'Select image',
      input: 'file',
      inputAttributes: {
        'accept': 'image/*',
        'aria-label': 'Upload your profile picture'
      }
    })
    
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
   
        this.updateCustomer.image= e.target.result as string;
        console.log(this.updateCustomer.image);
        

      
      }
      reader.readAsDataURL(file)
    }
  }
  backToList(){
     this.router.navigate(['customer/customerDetails'])
  }

}
