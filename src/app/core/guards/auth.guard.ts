import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

/**
 * This guard return true if the user is logged in
 * This guard can be further modified to :
 * * * check user roles using keycloakService.isUserInRole() function
 */
export const authGuard: CanActivateFn = (route, state) => {
  const keycloakService = inject(KeycloakService);

  const router = inject(Router);

  if(!keycloakService.isLoggedIn()) {
    router.navigate(['/please-login']);
   }
   return keycloakService.isLoggedIn();
};
