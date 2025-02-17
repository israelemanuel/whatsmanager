import { Component } from '@angular/core';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MainNavBarComponent } from '../core/main-nav-bar/main-nav-bar.component';


@Component({
  selector: 'app-whats-manager',
  templateUrl: './whats-manager.component.html',
  styleUrl: './whats-manager.component.scss',
  standalone: true,
  imports: [RouterOutlet,
    MatSlideToggleModule,
    MainNavBarComponent
  ]
})
export class WhatsManagerComponent {

    onThemeChange(event: MatSlideToggleChange) {
        const page = document.body;

        page.classList.toggle('dark');
    }

}
