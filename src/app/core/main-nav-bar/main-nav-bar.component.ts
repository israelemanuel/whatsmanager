import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-main-nav-bar',
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatRippleModule,
        MatSlideToggleModule,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './main-nav-bar.component.html',
    styleUrl: './main-nav-bar.component.scss',
    standalone: true,
})

export class MainNavBarComponent implements OnInit {

    public isMobile: boolean = false;
    public toggleMenu: boolean = false;
    public toggleNotification: boolean = false;
    public isDarkTheme: boolean = false; // Adiciona esta linha
    public toggleUserMenu: boolean = false;

    public menuItems = [

        { label: 'Home', url: '/admin' },
        { label: 'Sites', url: '/pagebuilder/website' },
        { label: 'Páginas', url: '/pagebuilder/webpage' },
        { label: 'Blog', url: '/pagebuilder/blog' },
        { label: 'News' },
        { label: 'Ajuda' },

    ]

    ngOnInit(): void {
        this.checkIfMobile();
    }

    checkIfMobile(): void {
        const width = window.innerWidth;
        this.isMobile = width <= 768;
    }

    onThemeChange(event: MatSlideToggleChange) {
        const page = document.body;
        page.classList.toggle('dark');
        this.isDarkTheme = page.classList.contains('dark'); // Adiciona esta linha
    }


    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.checkIfMobile();
    }


}
