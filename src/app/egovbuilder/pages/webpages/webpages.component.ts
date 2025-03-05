import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-webpages',
  imports: [
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './webpages.component.html',
  styleUrl: './webpages.component.scss',

})
export class WebpagesComponent {

}
