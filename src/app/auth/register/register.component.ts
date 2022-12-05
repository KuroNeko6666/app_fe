import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { RegisterInterface } from 'src/app/model/register-interface';
import { RegisterService } from 'src/app/service/auth/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(
    private fb : FormBuilder,
    private service : RegisterService,
    private router : Router,
    ){}

  isFail : boolean = false;

  formGroup = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required],
    role: ['', Validators.required],
  });

  register(): void {
    const data : RegisterInterface = {
      email : this.formGroup.value.email!,
      password : this.formGroup.value.password!,
      role : this.formGroup.value.role!
    }

    this.service.register(data).subscribe((res) =>{
      console.log(res);

      if (res.code != 201) {
        this.isFail = true;
        return;
      }
      this.router.navigateByUrl('/');
    });


  }
}
