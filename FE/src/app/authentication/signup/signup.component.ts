import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute,
    private router: Router,
    private customerService:CustomerService
  ) {}
  ngOnInit() {
    this.authForm = this.formBuilder.group({
      userName: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      userPassword: ['', Validators.required],
      userPhone: ['', Validators.required],
      userAddress: ['', Validators.required],
      userImage: ['', Validators.required]

    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() {
    return this.authForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.authForm.invalid) {
      return;
    } else {
      this.router.navigate(['/admin/dashboard/main']);
    }
  }
  //  onFileInput(event){
  //  const file: File=event.target.files[0];
  //  console.log(file);
   
  // this.newCustomer.image=file.name;
   
  // }

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
