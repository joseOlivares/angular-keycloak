import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

/**
 * This guard return true if the user is logged in
 * This guard can be further modified to :
 * * * check user roles using keycloakService.isUserInRole() function
 */
export const  authGuard: CanActivateFn = async (route, state) => {
  const keycloakService = inject(KeycloakService);

  const router = inject(Router);
  console.log('Se activo el auth guard');
  console.log('Route=', route.data);
  const isLoggedIn = await keycloakService.isLoggedIn();

  if(isLoggedIn===false) {
    router.navigate(['please-login']);
    return false;
   }
    return isLoggedIn;
};
