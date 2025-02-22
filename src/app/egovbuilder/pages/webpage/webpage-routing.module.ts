import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebpageComponent } from './webpage.component';

const routes: Routes = [
    {
        path: '',
        component: WebpageComponent,
        children: [


            { path: 'webpage-list', loadComponent: () => import('./pages/webpage-list/webpage-list.component').then(m => m.WebpageListComponent) },
            // { path: 'website', loadChildren: () => import('./pages/website/website.module').then(m => m.WebsiteModule) },;
            // { path: 'webpage-preview', loadComponent: () => import('./pages/webpage-preview/webpage-preview.component').then(m => m.WebpagePreviewComponent) },
            // { path: 'webpage-edit', loadComponent: () => import('./pages/webpage-edit/webpage-edit.component').then(m => m.WebpageEditComponent) },
            { path: '', pathMatch: 'full', redirectTo: 'webpage-list' },

        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class webPageRoutingModule { }
