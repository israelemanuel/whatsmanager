import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, output, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-login',
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {


    ngOnInit(): void {

    }




    @HostListener('window:resize', ['$event'])
    onResize(event: any) {

    }


}
