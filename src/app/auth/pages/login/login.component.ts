import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, output, signal, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-login',
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        MatIconModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    encapsulation: ViewEncapsulation.None,
    animations: [
        trigger('switchAnimation', [
            transition(':enter', [
                style({ transform: 'translateY(20%)', opacity: 0, position: 'absolute' }),
                animate('600ms cubic-bezier(0.35, 0, 0.25, 1)',
                    style({ transform: 'translateY(0)', opacity: 1, position: 'relative' })),
            ]),

            transition(':leave', [
                style({ transform: 'translateY(0)', opacity: 1, position: 'relative' }),
                animate('600ms cubic-bezier(0.35, 0, 0.25, 1)',
                    style({ transform: 'translateY(-20%)', opacity: 0, position: 'absolute' })),
            ]),
        ])
    ]
})
export class LoginComponent implements OnInit {

    public newAccount: boolean = false;
    public forggotPassword: boolean = false;
    public accountReset: boolean = false;
    hide = signal(true);

    public loginForm = new UntypedFormGroup({
        email: new UntypedFormControl(null, Validators.required),
        password: new UntypedFormControl(null, Validators.required)
    })

    public signUpForm = new UntypedFormGroup({
        name: new UntypedFormControl(null, Validators.required),
        email: new UntypedFormControl(null, Validators.required),
        password: new UntypedFormControl(null, Validators.required),
        confirmPassword: new UntypedFormControl(null, Validators.required)
    })

    public forggotPasswordForm = new UntypedFormGroup({
        email: new UntypedFormControl(null, Validators.required),
    })



    ngOnInit(): void {
        this.switchToSignIn();

    }

    switchToSignUp(){
        this.newAccount = true;
        this.forggotPassword = false;
        this.accountReset = false;

    }

    switchToSignIn(){
        this.newAccount = false;
        this.forggotPassword = false;
        this.accountReset = false;
    }

    switchToForggotPassword(){
        this.forggotPassword = true;
        this.newAccount = false;
        this.accountReset = false;
    }

    togglePaswwordVisibility(event: MouseEvent){
        this.hide.set(!this.hide());
        event.stopPropagation();
    }




    @HostListener('window:resize', ['$event'])
    onResize(event: any) {

    }


}
