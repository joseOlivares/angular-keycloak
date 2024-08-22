import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

export const isloggedGuard: CanActivateFn = async (route, state) => {
  const keycloakService = inject(KeycloakService);

  const router = inject(Router);
  console.log('Se activo islogged guard');
  console.log('Route=', route.data);
  const isLoggedIn = await  keycloakService.isLoggedIn();

  console.log('is Logged: ', isLoggedIn)

  if(isLoggedIn) {
    router.navigate([state.url]); //si está logueado lo envimamos a la página desde donde se llamo
    return false;
   }
    return true;
};
