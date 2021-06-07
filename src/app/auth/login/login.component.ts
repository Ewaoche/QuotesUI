import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = {
    email:null,
    password:null
  };
  constructor(private authservice:AuthserviceService, private router:Router ) { }

  ngOnInit(): void {
  }


  onSubmit(){
    this.authservice.loginUsers(this.loginUserData).subscribe(res => {
      localStorage.setItem("token", res.token);
      this.router.navigate(['/quote']);
    });
  }

}
