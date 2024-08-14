import { environment } from '../../../environments/environment';
import { KeycloakService } from "keycloak-angular";


export function initializeKeycloak(keycloak: KeycloakService) {

    return () =>
        keycloak.init({
            config: {
                url: environment.keycloak.url,
                realm: environment.keycloak.realm,
                clientId: environment.keycloak.clientId,
            },
            initOptions: {
                //checkLoginIframe: false,  //TODO:validar si debe ser true
                onLoad: 'check-sso',
                silentCheckSsoRedirectUri:
                    window.location.origin + '/assets/silent-check-sso.html'
            },
            enableBearerInterceptor: true  //TODO:validar si es necesario
        });
}
