import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

import { SpinnerVisibilityService } from 'ng-http-loader';
/**
 * This guard return true if the user is logged in
 * This guard can be further modified to :
 * * * check user roles using keycloakService.isUserInRole() function
 */
export const  authGuard: CanActivateFn = async (route, state) => {
  const keycloakService = inject(KeycloakService);
  const spinner = inject(SpinnerVisibilityService);

  const router = inject(Router);
  console.log('Se activo el auth Guard');
  console.log(' Guard Route=', route.parent);
  console.log('Guard State=', state.url);

  spinner.show();//TODO:validar si es necesario
  const isLoggedIn = await keycloakService.isLoggedIn();
  spinner.hide(); //TODO:validar si es necesario

  if(isLoggedIn===false) {
     //navegamos al mensaje de login y enviamos la ruta origen (esto es para el comportamiento de Keycloak)
    router.navigate(['please-login'], { queryParams: { returnUrl: state.url } });
    return false;
   }
    return isLoggedIn;
};
