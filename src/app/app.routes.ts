import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth/auth.guard';


export const routes: Routes = [
  {
    path:'please-login',
    loadComponent: () => import('./components/please-login/please-login.component')
    .then(comp => comp.PleaseLoginComponent)
   },
   {path:'private-page', loadComponent: () => import('./components/private-page/private-page.component')
    .then(comp => comp.PrivatePageComponent), canActivate: [authGuard]
   },

   { path: 'home', loadComponent: () => import('./components/home/home.component')
    .then(comp => comp.HomeComponent)
   },

   { path: '', redirectTo: 'home', pathMatch: 'full' },
   { path: '**', redirectTo: 'home' }
];
