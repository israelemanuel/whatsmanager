import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhatsManagerComponent } from './whats-manager.component';


const routes: Routes = [
    {
        path: '',
        component: WhatsManagerComponent,
        children: [
            { path: 'home', loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent) },
            { path: 'whatsapp', loadComponent: () => import('./pages/whatsapp/whatsapp.component').then(m => m.WhatsappComponent) },
            { path: 'webhooks', loadComponent: () => import('./pages/webhooks/webhooks.component').then(m => m.WebhooksComponent) },

            { path: '', pathMatch: 'full', redirectTo: 'home' },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class whatsManagerRoutingModule { }
