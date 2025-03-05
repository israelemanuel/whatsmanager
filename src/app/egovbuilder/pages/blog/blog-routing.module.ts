import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';


const routes: Routes = [
    {
        path: '',
        component: BlogComponent,
        children: [
            { path: 'blog-categories', loadComponent: () => import('./pages/blog-categories/blog-categories.component').then(m => m.BlogCategoriesComponent) },

            { path: '', pathMatch: 'full', redirectTo: 'website-list' },

        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class blogRoutingModule { }
