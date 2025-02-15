import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import apps from './options';
import { RouterLink } from '@angular/router';
import { MainNavBarComponent } from '../core/main-nav-bar/main-nav-bar.component';

@Component({
    selector: 'app-dashboard',
    imports: [
        CommonModule,
        FormsModule,
        MatRippleModule,
        RouterLink,
        MainNavBarComponent
    ],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

    public appList = apps;

}
