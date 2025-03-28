import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { popUp, popDown, slideLeft, slideRight, spinClockWise, spinCounterClockWise } from '../../../../../core-animations';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-webpage-create',
    imports: [
        CommonModule,
        OverlayModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatMenuModule,
        RouterLink
    ],
    templateUrl: './webpage-create.component.html',
    styleUrl: './webpage-create.component.scss',

})
export class WebpageCreateComponent {
    @ViewChild('ListWebpagesBody') ListWebpagesBody: ElementRef | any;
    @ViewChild('pageHeader') pageHeader: ElementRef | any;

    public isMobile: boolean = false;
    public isScrolled: boolean = false;

    public formWebPageCreate = new UntypedFormGroup({
        title: new UntypedFormControl(null, Validators.required),
        description: new UntypedFormControl(null,),
        content: new UntypedFormControl(null),
        cover: new UntypedFormControl(null),
        status: new UntypedFormControl(null),
        link: new UntypedFormControl(null),
    })



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
    }
}
