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
    router.navigate(['home']); //lo enviamos a home
    return false;
   }
    return isLoggedIn;
};
