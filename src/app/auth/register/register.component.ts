import { Component, OnInit } from '@angular/core'; 
import { AuthserviceService } from 'src/app/services/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData = {
    name:null,
    password:null,
    email:null
  };

  constructor(private authservice:AuthserviceService, private router:Router) { }

  ngOnInit(): void {
  } 


  onSubmit(){
    // console.log(this.registerUserData);
    this.authservice.registerUsers(this.registerUserData).subscribe(res => {
      // console.log(res)
      localStorage.setItem('message', res.message),
      this.router.navigate([''])
    });
  }

 

}
