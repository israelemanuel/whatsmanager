import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-webhooks',
    imports: [
        CommonModule,
        MatSlideToggleModule,
        MatButtonModule,
        MatRippleModule,
        MatDialogModule,
        MatIconModule,
    ],
    templateUrl: './webhooks.component.html',
    styleUrl: './webhooks.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class WebhooksComponent implements OnInit {

    public isMobile = false;

    public listWebHooks: any = [
        {
            title: 'Quando receber uma mensagem',
            subtitle: 'Paragominas - João'
        }
    ]

    public filteredWeHooks: any = []

    constructor(
        public dialog: MatDialog,
    ) {
        this.filteredWeHooks = this.listWebHooks
    }


    ngOnInit(): void {
        this.setViewWidth()
    }

    addWebHookDialog(): void {

        const dialogRef = this.dialog.open(addWebHookDialog, {
            panelClass: 'dialog-reset',
            width: '800px',
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    setViewWidth() {
        const width = window.innerWidth;

        if (width < 640) {
            this.isMobile = true
        } else {
            this.isMobile = false
        }

    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.setViewWidth()
    }

}


@Component({
    selector: 'add-webhook-dialog',
    imports: [
        CommonModule,
        MatSelectModule,
        FormsModule,
    ],
    templateUrl: './add-webhook-dialog.component.html',
    styleUrl: './webhooks.component.scss',
})

export class addWebHookDialog {


    public listTypeHewbHooks: any = [
        {
            title: 'Quando receber uma mensagem',
        },
    ]

    constructor(
        public dialogRef: MatDialogRef<addWebHookDialog>,
    ) { }

    close() {
        this.dialogRef.close()
    }

}
