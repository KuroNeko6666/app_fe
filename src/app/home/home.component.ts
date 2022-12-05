import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.checkLogin()

  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/auth/login');
  }

  checkLogin() : void{
    console.log("test");

    const token = localStorage.getItem('keyToken');
    if(!token){
      this.router.navigateByUrl('/auth/login');
    }
  }
}
