import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';


@Injectable()
export class GuardGuard implements CanActivate {
  constructor(private authservice:AuthserviceService, private router:Router){}
  canActivate():boolean{
    if(this.authservice.loggedIn()){
      return true;
    }
    else{
      this.router.navigate(['']);
      return false;
    }
  }
   
   
  
}
