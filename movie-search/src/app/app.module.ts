import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { NavbarComponent } from './template/navbar/navbar.component';
import { FooterComponent } from './template/footer/footer.component';
import { MovieService } from './movies/service/movie.service';
import { HttpModule, JsonpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';

const appRoutes: Routes = [

  {path: '', component: MovieListComponent, canActivate: [AuthGuardService]},
  {path: 'movie/:id', component: MovieDetailComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  
]


import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AuthService } from './auth/service/auth.service';
import { AuthGuardService } from './auth-guard/service/auth-guard.service';


export const firebaseConfig = environment.firebase;


@NgModule({
  declarations: [     
    AppComponent,
  
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    ContactComponent,
    MovieListComponent,
    MovieDetailComponent
  ],
  imports: [

    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    RouterModule.forRoot(appRoutes),
    BsDatepickerModule.forRoot(),
  ],
  providers: [MovieService,
  AuthService,
  AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
