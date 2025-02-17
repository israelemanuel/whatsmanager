import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
    selector: 'app-webpage-list',
    imports: [
        CommonModule
    ],
    templateUrl: './webpage-list.component.html',
    styleUrl: './webpage-list.component.scss'
})
export class WebpageListComponent {

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
            active: true
        },
        {
            title: 'About',
            url: '/about',
            icon: 'info',
            active: false
        },
        {
            title: 'Contact',
            url: '/contact',
            icon: 'phone',
            active: false
        },
        {
            title: 'Services',
            url: '/services',
            icon: 'settings',
            active: false
        },
        {
            title: 'Portfolio',
            url: '/portfolio',
            icon: 'work',
            active: false
        },
        {
            title: 'Blog',
            url: '/blog',
            icon: 'book',
            active: false
        },
        {
            title: 'Shop',
            url: '/shop',
            icon: 'shopping_cart',
            active: false
        },
        {
            title: 'Pricing',
            url: '/pricing',
            icon: 'attach_money',
            active: false
        },
        {
            title: 'FAQ',
            url: '/faq',
            icon: 'question_answer',
            active: false
        },
        {
            title: 'Login',
            url: '/login',
            icon: 'login',
            active: false
        },
        {
            title: 'Register',
            url: '/register',
            icon: 'person_add',
            active: false
        },
        {
            title: 'Forgot Password',
            url: '/forgot-password',
            icon: 'lock',
            active: false
        },
        {
            title: 'Reset Password',
            url: '/reset-password',
            icon: 'lock_open',
            active: false
        },
        {
            title: '404 Error',
            url: '/404',
            icon: 'error',
            active: false
        },
        {
            title: '500 Error',
            url: '/500',
            icon: 'error',
            active: false
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
