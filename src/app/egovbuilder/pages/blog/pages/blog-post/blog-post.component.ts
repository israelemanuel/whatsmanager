import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { popUp, popDown, slideLeft, slideRight, spinClockWise, spinCounterClockWise } from '../../../../../core-animations';

@Component({
  selector: 'app-blog-post',
  imports: [
    CommonModule
  ],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss',
  animations: [popUp, popDown, slideLeft, slideRight, spinClockWise, spinCounterClockWise ]
})
export class BlogPostComponent {

    @ViewChild('ListWebpagesBody') ListWebpagesBody: ElementRef | any;
        @ViewChild('pageHeader') pageHeader: ElementRef | any;

        public isMobile: boolean = false;
        public isScrolled: boolean = false;
        public headerHeight: number = 0;

        public lstPosts: any[] = [
            {
                title: 'Página Inicial Prefeitura',
                url: '/home',
                dataPublicado: '11/03/2025',
                dataCriacao: '11/03/2025',
                autor: 'Bob Espindola',
                category: 'Ação social',
                active: true,
                published: true,
            },
            {
                title: 'Sobre a Prefeitura',
                url: '/about',
                dataPublicado: '11/03/2025',
                dataCriacao: '11/03/2025',
                autor: 'Bob Espindola',
                category: 'Ação social',
                active: false,
                published: true,
            },
            {
                title: 'Contato Prefeitura',
                url: '/contact',
                dataPublicado: '11/03/2025',
                dataCriacao: '11/03/2025',
                autor: 'Bob Espindola',
                category: 'Ação social',
                active: false,
                published: true,
            },
            {
                title: 'Serviços Prefeitura',
                url: '/services',
                dataPublicado: '11/03/2025',
                dataCriacao: '11/03/2025',
                autor: 'Bob Espindola',
                category: 'Ação social',
                active: false,
                published: true,
            },
            {
                title: 'Portfólio Prefeitura',
                url: '/portfolio',
                dataPublicado: '11/03/2025',
                dataCriacao: '11/03/2025',
                autor: 'Bob Espindola',
                category: 'Ação social',
                active: false,
                published: true,
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
