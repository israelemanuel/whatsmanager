import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-main-nav-bar',
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './main-nav-bar.component.html',
  styleUrl: './main-nav-bar.component.scss'
})
export class MainNavBarComponent {

}
