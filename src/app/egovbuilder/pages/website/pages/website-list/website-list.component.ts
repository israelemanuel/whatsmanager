import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { popUp, popDown, slideLeft, slideRight, spinClockWise, spinCounterClockWise } from '../../../../../core-animations';

@Component({
    selector: 'app-website-list',
    imports: [
        CommonModule
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
            title: 'Home',
            url: '/home',
            icon: 'home',
            active: true,
            published: true,
            thumbnail: 'assets/images/thumbnail/image.png'
        },
        {
            title: 'About',
            url: '/about',
            icon: 'info',
            active: false,
            published: true,
            thumbnail: 'assets/images/thumbnail/image.png'
        },
        {
            title: 'Contact',
            url: '/contact',
            icon: 'phone',
            active: false,
            published: true,
            thumbnail: 'assets/images/thumbnail/image.png'
        },
        {
            title: 'Services',
            url: '/services',
            icon: 'settings',
            active: false,
            published: true,
            thumbnail: 'assets/images/thumbnail/image.png'
        },
        {
            title: 'Portfolio',
            url: '/portfolio',
            icon: 'work',
            active: false,
            published: true,
            thumbnail: 'assets/images/thumbnail/image.png'
        },
        {
            title: 'Blog',
            url: '/blog',
            icon: 'book',
            active: false,
            published: true,
            thumbnail: 'assets/images/thumbnail/image.png'
        },
        {
            title: 'Shop',
            url: '/shop',
            icon: 'shopping_cart',
            active: false,
            published: true,
            thumbnail: 'assets/images/thumbnail/image.png'
        },
        {
            title: 'Pricing',
            url: '/pricing',
            icon: 'attach_money',
            active: false,
            published: true,
            thumbnail: 'assets/images/thumbnail/image.png'
        },
        {
            title: 'FAQ',
            url: '/faq',
            icon: 'question_answer',
            active: false,
            published: true,
            thumbnail: 'assets/images/thumbnail/image.png'
        },
        {
            title: 'Login',
            url: '/login',
            icon: 'login',
            active: false,
            published: true,
            thumbnail: 'assets/images/thumbnail/image.png'
        },
        {
            title: 'Register',
            url: '/register',
            icon: 'person_add',
            active: false,
            published: true,
            thumbnail: 'assets/images/thumbnail/image.png'
        },
        {
            title: 'Forgot Password',
            url: '/forgot-password',
            icon: 'lock',
            active: false,
            published: true,
            thumbnail: 'assets/images/thumbnail/image.png'
        },
        {
            title: 'Reset Password',
            url: '/reset-password',
            icon: 'lock_open',
            active: false,
            published: true,
            thumbnail: 'assets/images/thumbnail/image.png'
        },
        {
            title: '404 Error',
            url: '/404',
            icon: 'error',
            active: false,
            published: true,
            thumbnail: 'assets/images/thumbnail/image.png'
        },
        {
            title: '500 Error',
            url: '/500',
            icon: 'error',
            active: false,
            published: true,
            thumbnail: 'assets/images/thumbnail/image.png'
        }
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
