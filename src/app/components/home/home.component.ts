import { Component, inject, OnInit, signal } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  keycloakService=inject(KeycloakService);
  myData=signal('');

  apiService=inject(ApiService);

  ngOnInit(): void {
    this.isUserLoggedIn();
  }


  login(){
    this.keycloakService.login();
  }

  logout() {
    this.keycloakService.logout();
    }

  showProfile(){
    if(this.isUserLoggedIn()){
      this.keycloakService.loadUserProfile().then((profile) => {
        console.log(profile);
        this.myData.set(JSON.stringify(profile));});
      }
  }

  showRoles(){
    if(this.isUserLoggedIn()){
      this.myData.set(JSON.stringify(this.keycloakService.getUserRoles()));
      }
  }

showParsedToken(){
    if(this.isUserLoggedIn()){
      this.myData.set(JSON.stringify(this.keycloakService.getKeycloakInstance().tokenParsed));
    }
  }

 isUserLoggedIn(){
  this.myData.set('Cargando...');
    if(this.keycloakService.isLoggedIn()){
      this.myData.set('Sesión iniciada');
      return true;
    }else{
      this.myData.set('Usuario no ha iniciado sesión');
      return false;
    }
  }

  makeHttpRequest() {
    if(this.isUserLoggedIn()){
      this.apiService.postData().subscribe(resp=>{
        this.myData.set(JSON.stringify(resp));
        console.log(resp);
      })
    }
   }

}
