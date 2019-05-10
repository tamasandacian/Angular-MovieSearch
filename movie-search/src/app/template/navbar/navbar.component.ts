import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../auth/service/auth.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  isLoggedIn: boolean;
  loggedInUser: string;
  showRegister: boolean;

  constructor(
    private flashMessagesService: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
  ) {
   
   }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if(auth){
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      }else{
        this.isLoggedIn = false;
      }
    })
  }

  onLogoutClick(){
    this.authService.logout();
     this.flashMessagesService.show('You are logged out', {cssClass: 'alert-success', timeout: 4000});
     this.router.navigate(['/login']);
  }  

}
