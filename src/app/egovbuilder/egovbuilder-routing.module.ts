import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EgovbuilderComponent } from './egovbuilder.component';

const routes: Routes = [
    {
        path: '',
        component: EgovbuilderComponent,
        children: [


            { path: 'webpage', loadChildren: () => import('./pages/webpage/webpage.module').then(m => m.WebpageModule) },
            { path: 'website', loadChildren: () => import('./pages/website/website.module').then(m => m.WebsiteModule) },
            { path: 'blog', loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule) },
            // { path: 'webpage-preview', loadComponent: () => import('./pages/webpage-preview/webpage-preview.component').then(m => m.WebpagePreviewComponent) },
            // { path: 'webpage-edit', loadComponent: () => import('./pages/webpage-edit/webpage-edit.component').then(m => m.WebpageEditComponent) },
            { path: '', pathMatch: 'full', redirectTo: 'website' },

        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class eGovBuilderRoutingModule { }
