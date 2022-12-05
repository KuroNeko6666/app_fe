import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginInterface } from 'src/app/model/login';
import { LoginService } from 'src/app/service/auth/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private service: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.checkLogin();
  }

  isFail : boolean = false;

  formGroup = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required]
  });

  login() : void{
    const data : LoginInterface = {
      email : this.formGroup.value.email!,
      password : this.formGroup.value.password!
    }

    if(data.email && data.password){
      this.service.login(data).subscribe((res) =>{
        console.log(res);

        if (res.code != 200) {
          this.isFail = true;
          return;
        }
        localStorage.setItem("keyToken", res.data.token)
        localStorage.setItem("user", res.data.email)

        this.router.navigateByUrl('/');
      })
    }

  }

  checkLogin() : void{
    const token = localStorage.getItem('keyToken');
    if(token){
      this.router.navigateByUrl('/');
    }
  }

}
