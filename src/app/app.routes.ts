import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'admin',
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
    },
    {
        path: 'whats-manager',
        loadChildren: () => import('./whats-manager/whats-manager.module').then(m => m.WhatsManagerModule)
    },

    {
        path: 'pagebuilder',
        loadChildren: () => import('./egovbuilder/egovbuilder.module').then(m => m.EgovbuilderModule)
    }
];
