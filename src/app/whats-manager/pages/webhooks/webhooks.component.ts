import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule }  from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';

@Component({
    selector: 'app-webhooks',
    imports: [
        CommonModule,
        MatSlideToggleModule,
        MatButtonModule,
        MatRippleModule
    ],
    templateUrl: './webhooks.component.html',
    styleUrl: './webhooks.component.scss',
})
export class WebhooksComponent {

    public listWebHooks: any = [
        {
            title: 'Quando receber uma mensagem',
            subtitle: 'Paragominas - João'
        }
    ]

    public filteredWeHooks: any = []

    constructor() {
        this.filteredWeHooks = this.listWebHooks
    }

}
