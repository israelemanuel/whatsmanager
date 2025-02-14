import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EgovbuilderComponent } from './egovbuilder.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: EgovbuilderComponent,
        children: [
            { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
            { path: '', pathMatch: 'full', redirectTo: 'home' },

        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class eGovBuilderRoutingModule { }
