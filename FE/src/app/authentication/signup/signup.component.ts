import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../../beans/customer';
import { CustomerService } from '../../services/customer.service';
import  Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  authForm: FormGroup;
  submitted = false;
  returnUrl: string;
  hide = true;
  chide = true;
  public imageFiles: any = File;
  newCustomer: Customer=new Customer();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private customerService:CustomerService
  ) {}
  ngOnInit() {
    this.authForm = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['',[Validators.required, Validators.email, Validators.minLength(5)],],
      userPassword: ['', Validators.required],
      userPhone: ['',[Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
      userAddress: ['', Validators.required],
    })
  }
  get f() {
    return this.authForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.authForm.invalid) {
      return;
    } else {
      this.router.navigate(['/admin/dashboard/main']);
    }
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
   
        this.newCustomer.image= e.target.result as string;
        

      
      }
      reader.readAsDataURL(file)
    }
  }

  register(){
    this.customerService.addCustomer(this.newCustomer).subscribe(
      res=>{
        if(res){
        
          
          Swal.fire({
            icon: 'success',
            title: 'נרשמתה',
            text: 'נרשמתה בהצלחה ',

        }

        
        );
        this.router.navigate(['/authentication/signin'])
        }
        
        if(!res){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'המשתמש זה קיים',

        });
        }

      }
    )
  }
}
