import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EgovbuilderComponent } from './egovbuilder.component';

const routes: Routes = [
    {
        path: '',
        component: EgovbuilderComponent,
        children: [
            { path: 'website', loadChildren: () => import('./pages/website/website.module').then(m => m.WebsiteModule) },
            { path: 'webpages', loadChildren: () => import('./pages/webpages/webpages.module').then(m => m.WebpagesModule) },
            { path: 'blog', loadChildren: () => import('./pages/blog/blog.module').then(m => m.WebsiteModule) },
            { path: '', pathMatch: 'full', redirectTo: 'website' },

        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class eGovBuilderRoutingModule { }
