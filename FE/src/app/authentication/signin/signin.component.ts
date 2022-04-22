import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Role } from 'src/app/core/models/role';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import { Login } from 'src/app/beans/login';
import { LoginUsersService } from 'src/app/services/login-users.service'
import { Customer } from 'src/app/beans/customer';
import { User } from 'src/app/beans/User';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  loginUser:Login=new Login();
  authForm: FormGroup;
  submitted = false;
  loading = false;
  error = '';
  hide = true;
  // loginUser:Customer=new Customer();
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginUsersService
  ) {
    super();
  }

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      username: ['karem@gmail.com', Validators.required],
      password: ['123456', Validators.required],
    });
  }
  get f() {
    return this.authForm.controls;
  }
  
  
  onSubmit() {
    this.submitted = true;
    this.loading = true;
    this.error = '';
    if (this.authForm.invalid) {
      this.error = 'Username and Password not valid !';
      return;
    } else {
      let   loginUser:Login=new Login();
      loginUser.email=this.f.username.value;
      loginUser.password=this.f.password.value;
      console.log(loginUser);
      this.loginService.login1(this.loginUser).subscribe((res:User)=>{

        if(res==null){
          this.error = 'Invalid Login';        
            this.submitted = false;
            this.loading = false;
        }
        else{
        this.loginService.loggedInUser=res;
        console.log(res);
      
          if(res.userRole==Role.Customer){
                // this.router.navigate(['/authentication/cust/customer/customerDetails']);
                this.router.navigate(["customer/customerDetails",res.id])
              } 
              else if(res.userRole==Role.Admin){
                this.router.navigate(['admin/allTechnician']);
              }  

              this.loading = false;
              
        }
        
    
      
      },
      (error) => {
        this.error = error;
        this.submitted = false;
        this.loading = false;
      }
             
        
       
        );
    }
  }
}
