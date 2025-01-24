import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { authRoutingModule } from './auth-routing.module';
import { PasswordResetComponent } from './pages/password-reset/password-reset.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    authRoutingModule,
    LoginComponent,
    PasswordResetComponent
  ]
})
export class AuthModule { }
