import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:'home',
    loadComponent: () => import('./components/home/home.component').then(comp => comp.HomeComponent),
    canActivate: [authGuard]
   },
   {
    path:'please-login',
    loadComponent: () => import('./components/please-login/please-login.component').then(comp => comp.PleaseLoginComponent)
   },
  { path: '**', redirectTo: 'home' }
];
