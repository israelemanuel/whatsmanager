import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebpagesComponent } from './webpages.component';


const routes: Routes = [
    {
        path: '',
        component: WebpagesComponent,
        children: [
            { path: 'webpages-list', loadComponent: () => import('./pages/webpages-list/webpages-list.component').then(m => m.WebpagesListComponent) },
            { path: 'webpages-create', loadComponent: () => import('./pages/webpage-create/webpage-create.component').then(m => m.WebpageCreateComponent) },

            { path: '', pathMatch: 'full', redirectTo: 'webpages-list' },

        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class webPageRoutingModule { }
