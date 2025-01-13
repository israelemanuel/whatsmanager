import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import apps from './options';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-dashboard',
    imports: [
        CommonModule,
        FormsModule,
        MatRippleModule,
    ],
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

    public appList = apps;
    public sidebar : boolean = false;

}
