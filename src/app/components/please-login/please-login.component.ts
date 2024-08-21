import { Component, inject } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-please-login',
  standalone: true,
  imports: [],
  templateUrl: './please-login.component.html',
  styleUrl: './please-login.component.scss'
})
export class PleaseLoginComponent {

  keycloackService = inject(KeycloakService);



  keycloackLogin() {
    this.keycloackService.login();
  }


}
