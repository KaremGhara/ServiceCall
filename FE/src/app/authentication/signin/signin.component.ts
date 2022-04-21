import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';
import { Role } from 'src/app/core/models/role';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import { Login } from 'src/app/beans/login';
import { User } from 'src/app/beans//user';
import { Customer } from 'src/app/beans/customer';
import { LoginUsersService } from 'src/app/services/login-users.service'
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
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
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
      // let   loginUser:Customer=new Customer();
      // loginUser.email=this.f.username.value;
      // loginUser.userPassword=this.f.password.value;
      // console.log(loginUser);
      this.loginService.login1(this.loginUser).subscribe(res=>{
        alert(res.userRole)
        console.log(res);
        if(res){
          console.log(res);
          if(res.userRole==Role.Customer){
                this.router.navigate(['/authentication/customerDetails',res.id]);
              } 
              else if(res.userRole==Role.Admin){
                this.router.navigate(['/authentication/admin/allTechnician']);
              }  

              this.loading = false;
              
        }
      //   if(!res){
      //     this.error = 'Invalid Login';        
      //     this.submitted = false;
      //     this.loading = false;
      // }
      // else{
      //   if(res.userRole=="Customer"){
      //     this.router.navigate(['/customer/customerDetails',res.id]);
      //   }
      //   this.loading = false;
      // }
      (error) => {
        this.error = error;
        this.submitted = false;
        this.loading = false;
      }
      }
             
        
       
        );
    }
  }
}
