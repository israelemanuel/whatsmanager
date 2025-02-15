import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhatsManagerComponent } from './whats-manager.component';


const routes: Routes = [
    {
        path: '',
        component: WhatsManagerComponent,
        children: [
            { path: 'whatsapp', loadComponent: () => import('./pages/whatsapp/whatsapp.component').then(m => m.WhatsappComponent) },
            { path: 'webhooks', loadComponent: () => import('./pages/webhooks/webhooks.component').then(m => m.WebhooksComponent) },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class whatsManagerRoutingModule { }
