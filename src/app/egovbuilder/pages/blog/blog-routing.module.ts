import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';

const routes: Routes = [
    {
        path: '',
        component: BlogComponent,
        children: [
            { path: 'blog-post', loadComponent: () => import('./pages/blog-post/blog-post.component').then(m => m.BlogPostComponent) },

            { path: '', pathMatch: 'full', redirectTo: 'blog-post' },

        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogRoutingModule { }
