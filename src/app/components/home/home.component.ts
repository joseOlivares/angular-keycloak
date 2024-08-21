import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {  KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  keycloakService=inject(KeycloakService);

  logout(){
    this.keycloakService.logout();

  }

}
