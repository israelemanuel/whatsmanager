import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainNavBarComponent } from '../core/main-nav-bar/main-nav-bar.component';
@Component({
    selector: 'app-egovbuilder',
    imports: [
        RouterOutlet,
        MainNavBarComponent
    ],
    templateUrl: './egovbuilder.component.html',
    styleUrl: './egovbuilder.component.scss',
    standalone: true
})
export class EgovbuilderComponent {

}
