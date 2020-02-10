import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [LoginComponent, ResetPasswordComponent, RegisterComponent, AuthComponent, ],
  imports: [
    CommonModule,
    AuthRoutingModule,ReactiveFormsModule,FormsModule
  ]
})
export class AuthModule { }
