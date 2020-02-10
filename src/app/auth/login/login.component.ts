import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormBuilder, } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first, map, catchError } from "rxjs/operators";
import { NgwWowService } from 'ngx-wow';
import { LoginService } from './../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  forgotForm: FormGroup;
  submitted: boolean = false;
  forSubmitted: boolean = false;
  message: boolean = false;
  messages: string = "";
  forgotmessage: boolean = false;
  forgotmessages: string = "";
  forgotmessage1: boolean = false;
  forgotmessages1: string = "";
  rem: boolean = false;

  constructor(
    private modalService: NgbModal,
    private wowService: NgwWowService,
    private router: Router,
    private fb: FormBuilder,
    private service: LoginService,
  ) {
    // if (localStorage.getItem('Admin_Token')) {
    //   this.router.navigate(['/admin/dashboard'])
    // }
  }

  ngOnInit() {
    this.wowService.init();
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]),
      remember_me: [false]
    })
    this.forgotForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")])
    })
    this.loginForm.get('email').setValue(this.user_email);
    console.log(this.user_email);
    this.loginForm.get('password').setValue(this.user_pass);
    if (localStorage.getItem('noqaty_admin_rem')) {
      this.rem = true;
      this.loginForm.get('remember_me').setValue(this.rem)
    } else {
      this.rem = false;
    }
  }
  ngAfterViewInit() {
    // this.spinnerService.show();
  }
  // new code added for remember me
  get user_email(): any {
    if (localStorage.getItem('noqaty_admin_rem')) {
      return localStorage.getItem('noqaty_admin_email');
    } else {
      return '';
    }
  }

  get user_pass(): any {
    if (localStorage.getItem('noqaty_admin_rem')) {
      var decPass = localStorage.getItem('noqaty_admin_password');
      var decodedPass = atob(decPass);
      return decodedPass;
    } else {
      return '';
    }
  }

  onSubmit(log) {
    this.submitted = true;
    if (this.f.remember_me.value === true) {
      localStorage.setItem("noqaty_admin_rem", "true");
      localStorage.setItem("noqaty_admin_email", this.f.email.value);
      var encodedPass = btoa(this.f.password.value);
      localStorage.setItem("noqaty_admin_password", encodedPass);
    } else {
      this.rem = false;
      localStorage.removeItem("noqaty_admin_rem");
      localStorage.removeItem("noqaty_admin_email");
      localStorage.removeItem("noqaty_admin_password");
    }
    console.log("this.f.remember_me.value==>" + this.f.remember_me.value);
    if (this.f.email.value && this.f.password.value) {
      this.service.checkLoginFunction(log).pipe().subscribe(res => {
        if (res.Status == 200) {
          if (res.Success == true) {
            localStorage.setItem('AdminPass', this.loginForm.value.password);
            localStorage.setItem('AdminEmail', res.Result.email);
            localStorage.setItem('Admin_Token', res.Result.token);
            localStorage.setItem('Admin_Pic', res.Result.profilePic);
            localStorage.setItem('Admin_Name', res.Result.first_name);
            localStorage.setItem('Admin_Obj', JSON.stringify(res.Result));
            this.router.navigate(['/admin/dashboard']);
            this.submitted = false;
          } else {
            this.message = true;
            this.messages = res.Message;
            setTimeout(() => this.message = false, 4000);
          }
        } else {
          this.message = true;
          this.messages = res.Message;
          setTimeout(() => this.message = false, 4000);
        }
      })
    }
  }

  onSubmitForgot(forgot) {
    this.forSubmitted = true;
    if (this.forgotForm.valid) {
      this.service.checkForgotPass(forgot).pipe().subscribe(res => {
        if (res.Status == 200) {
          if (res.Success == true) {
            this.forgotmessage = true;
            this.forgotmessages = res.Message;
            setTimeout(() => this.forgotmessage = false, 3000);
            setTimeout(() => this.closeAllModals(), 3000);
          } else {
            this.forgotmessage1 = true;
            this.forgotmessages1 = res.Message;
            setTimeout(() => this.forgotmessage1 = false, 3000);
          }
        } else {
        }
      })
    }
  }

  keyDownHandler(event) {
    if (event.target.value.length > 0) {
      return true;
    } else {
      if (event.keyCode === 32) {
        return false;
      }
    }
  }

  get f() {
    return this.loginForm.controls;
  }

  get ps() {
    return this.forgotForm.controls;
  }

  closeAllModals() {
    this.modalService.dismissAll("close all of them");
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

}
