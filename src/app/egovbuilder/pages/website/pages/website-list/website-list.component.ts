import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { popUp, popDown, slideLeft, slideRight, spinClockWise, spinCounterClockWise } from '../../../../../core-animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-website-list',
    imports: [
        CommonModule,
        MatButtonModule,
        MatTooltipModule,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './website-list.component.html',
    styleUrl: './website-list.component.scss',
    animations: [popUp, popDown, slideLeft, slideRight, spinClockWise, spinCounterClockWise ]

})
export class WebsiteListComponent {
    @ViewChild('ListWebpagesBody') ListWebpagesBody: ElementRef | any;
    @ViewChild('pageHeader') pageHeader: ElementRef | any;

    public isMobile: boolean = false;
    public isScrolled: boolean = false;
    public headerHeight: number = 0;

    public lstWebpages: any[] = [
        {
            title: 'PM Santo Antônio do Taua',
            url: 'http://localhost:3000',
            internUrl: '/pagebuilder/webpages/webpages-list',
            icon: 'home',
            active: true,
            published: true,
            thumbnail: 'assets/images/thumbnail/image.png'
        },

    ];

    constructor() { }

    ngOnInit(): void {
        this.checkIfMobile()

    }

    ngAfterViewInit(): void {
        this.reduceWhenStartScroll();
    }

    checkIfMobile(): void {
        const width = window.innerWidth;
        this.isMobile = width <= 768;
    }

    reduceWhenStartScroll(): void {

        this.checkIfMobile();

        this.ListWebpagesBody.nativeElement.addEventListener('scroll', (event: any) => {
            if (this.isMobile && event.target.scrollTop >= 56) {
                this.isScrolled = true;
            } else {
                this.isScrolled = false;

            }
        });


    }


    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.checkIfMobile();
        this.reduceWhenStartScroll();
    }
}
