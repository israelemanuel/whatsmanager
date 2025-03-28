import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteComponent } from './website.component';

const routes: Routes = [
    {
        path: '',
        component: WebsiteComponent,
        children: [
            { path: 'website-list', loadComponent: () => import('./pages/website-list/website-list.component').then(m => m.WebsiteListComponent) },
            { path: 'website-create', loadComponent: () => import('./pages/website-create/website-create.component').then(m => m.WebsiteCreateComponent) },

            { path: '', pathMatch: 'full', redirectTo: 'website-list' },

        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class webSiteRoutingModule { }
