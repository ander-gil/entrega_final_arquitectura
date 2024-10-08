import { Routes } from '@angular/router';
import { PortadaComponent } from './components/portada/portada.component';
import { error } from 'console';

export const routes: Routes = [
    
    {
      path: 'galeria',
      loadComponent: () => import('./components/galeria-component/galeria-component.component').then(m => m.GaleriaComponentComponent)
    },
    {
      path: 'comparador',
      loadComponent: () => import('./components/comparador-component/comparador-component.component').then(m => m.ComparadorComponentComponent)
    },
    {
      path: 'foro',
      loadComponent: () => import('./components/foro-component/foro-component.component').then(m => m.ForoComponentComponent)
    },
    {
      path: 'pruebas',
      loadComponent: () => import('./components/pruebas/pruebas.component').then(m => m.PruebasComponent)
    },
    {
      path: 'login',
      loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)
    },
    {
      path: '***',
      loadComponent: () => import('./components/portada/portada.component').then(m => m.PortadaComponent),
    }
  ];
  
