import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./whats-manager/whats-manager.module').then(m => m.WhatsManagerModule)
  }
];
