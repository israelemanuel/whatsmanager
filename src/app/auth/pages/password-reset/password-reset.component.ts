import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-password-reset',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './password-reset.component.html',
  styleUrl: './password-reset.component.scss',
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
export class PasswordResetComponent {
    public accountResetForm = new UntypedFormGroup({
        newPassword: new UntypedFormControl(null, Validators.required),
        confirmPassword: new UntypedFormControl(null, Validators.required)
    })
}
