import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';


@Component({
  selector: 'app-please-login',
  standalone: true,
  imports: [],
  templateUrl: './please-login.component.html',
  styleUrl: './please-login.component.scss'
})
export class PleaseLoginComponent {

  keycloakService=inject(KeycloakService);

  private route=inject(ActivatedRoute); //ruta activa

  login() {
    const urlPrevia=this.route.snapshot.queryParams['returnUrl'] || '/';//recibimos el param del AuthGuard
    console.log(urlPrevia);

    //reemplazamos el historial de navegación por la url previa
    //url previa es la que disparó el Guard y nos envió a please-login
    history.replaceState(null, '', urlPrevia);

    this.keycloakService.login();
  }
}
