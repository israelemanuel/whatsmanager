import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';


const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
            { path: 'passwordReset', loadComponent: () => import('./pages/password-reset/password-reset.component').then(m => m.PasswordResetComponent) },

            { path: '', pathMatch: 'full', redirectTo: 'login' },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class authRoutingModule { }
