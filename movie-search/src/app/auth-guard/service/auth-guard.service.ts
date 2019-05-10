import { Injectable } from '@angular/core';
import { AuthService } from '../../auth/service/auth.service';
import { CanActivate, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuardService implements CanActivate {

  user$: Observable<firebase.User>;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
  ) {
    this.user$ = afAuth.authState;
   }

  canActivate(): Observable<boolean> {
    return this.user$.map(user => {
      if (!user) {
        this.router.navigate(['/login']);
        return false;
      } else {
        return true;
      }
    });
  }
}
