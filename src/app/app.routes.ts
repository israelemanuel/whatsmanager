import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'admin',
        loadChildren: () => import('./whats-manager/whats-manager.module').then(m => m.WhatsManagerModule)
    },
    {
        path: 'egovbuilder',
        loadChildren: () => import('./egovbuilder/egovbuilder.module').then(m => m.EgovbuilderModule)
      }
];
