import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';
import { Role } from 'src/app/core/models/role';
import { LoginUsersService } from 'src/app/services/login-users.service';
@Component({
  selector: 'app-locked',
  templateUrl: './locked.component.html',
  styleUrls: ['./locked.component.scss'],
})
export class LockedComponent implements OnInit {
  authForm: FormGroup;
  submitted = false;
  userImg: string;
  userFullName: string;
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private loginService: LoginUsersService
  ) {}
  ngOnInit() {
    this.authForm = this.formBuilder.group({
      password: ['', Validators.required],
    });
    this.userFullName =
      this.loginService.loggedInUser.userName;

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
      const role = this.loginService.loggedInUser.userRole;
      if (role === Role.All || role === Role.Admin) {
        this.router.navigate(['/admin/dashboard/main']);
      } else if (role === Role.Customer) {
        this.router.navigate(['/customer/customer-details']);
      } else if (role === Role.Technician) {
        this.router.navigate(['/student/dashboard']);
      } else {
        this.router.navigate(['/authentication/signin']);
      }
    }
  }
}
