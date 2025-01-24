import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-whatsapp',
    imports: [
        CommonModule,
        MatRippleModule,
        MatDialogModule,
        MatIconModule
    ],
    templateUrl: './whatsapp.component.html',
    styleUrl: './whatsapp.component.scss'
})

export class WhatsappComponent implements OnInit {

    public isMobile: boolean = false;

    public contactsList: any = [
        //crie uma lista de contatos com os seguintes campos: nome, localidade e ativo
        {
            id: 1,
            name: 'João Procópio',
            localidade: 'Paragominas',
            ativo: false,
        },
        {
            id: 2,
            name: 'Maria da Silva',
            localidade: 'Belém',
            ativo: false,
        },
        {
            id: 3,
            name: 'José da Silva',
            localidade: 'Ananindeua',
            ativo: false,
        },
        {
            id: 4,
            name: 'Pedro da Silva',
            localidade: 'Marituba',
            ativo: false,
        },
        {
            id: 5,
            name: 'Ana da Silva',
            localidade: 'Castanhal',
            ativo: false,
        },
        {
            id: 6,
            name: 'Paulo da Silva',
            localidade: 'São Miguel do Guamá',
            ativo: false,
        },
        {
            id: 7,
            name: 'Lucas da Silva',
            localidade: 'Marabá',
            ativo: false,
        },
        {
            id: 8,
            name: 'Luciana da Silva',
            localidade: 'Tucuruí',
            ativo: false,
        },
        {
            id: 9,
            name: 'Lucas da Silva',
            localidade: 'Marabá',
            ativo: false,
        },
        {
            id: 10,
            name: 'Luciana da Silva',
            localidade: 'Tucuruí',
            ativo: false,
        },
        {
            id: 11,
            name: 'Lucas da Silva',
            localidade: 'Marabá',
            ativo: false,
        },
        {
            id: 12,
            name: 'Luciana da Silva',
            localidade: 'Tucuruí',
            ativo: false,
        },
        {
            id: 13,
            name: 'Lucas da Silva',
            localidade: 'Marabá',
            ativo: false,
        },
        {
            id: 14,
            name: 'Luciana da Silva',
            localidade: 'Tucuruí',
            ativo: false,
        },
        {
            id: 15,
            name: 'Lucas da Silva',
            localidade: 'Marabá',
            ativo: false,
        },
        {
            id: 16,
            name: 'Luciana da Silva',
            localidade: 'Tucuruí',
            ativo: false,
        },
        {
            id: 17,
            name: 'Lucas da Silva',
            localidade: 'Marabá',
            ativo: false,
        },
        {
            id: 18,
            name: 'Luciana da Silva',
            localidade: 'Tucuruí',
            ativo: false,
        },
        {
            id: 19,
            name: 'Lucas da Silva',
            localidade: 'Marabá',
            ativo: false,
        },
        {
            id: 20,
            name: 'Luciana da Silva',
            localidade: 'Tucuruí',
            ativo: false,
        },
        {
            id: 21,
            name: 'Lucas da Silva',
            localidade: 'Marabá',
            ativo: false,
        },
        {
            id: 22,
            name: 'Luciana da Silva',
            localidade: 'Tucuruí',
            ativo: false,
        },
        {
            id: 23,
            name: 'Lucas da Silva',
            localidade: 'Marabá',
            ativo: false,
        },
        {
            id: 24,
            name: 'Luciana da Silva',
            localidade: 'Tucuruí',
            ativo: false,
        }
    ]

    public filteredContacts: any = [];

    constructor(
        public dialog: MatDialog,
    ) { }

    ngOnInit(): void {
        this.filteredContacts = this.contactsList;
        this.setViewWidth()
    }


    connectContactID(contact: any) {




        this.filteredContacts = this.contactsList.map((item: any) => {
            if (item.id === contact.id) {
                item.ativo = !item.ativo;
            }
            return item;
        });
    }

    addWhatsappDialog(): void {

        const dialogRef = this.dialog.open(addWhatsappComponent, {
            panelClass: 'dialog-reset',
            width: '400px',
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    removeWhatsappDialog(item: any): void {

        const dialogRef = this.dialog.open(removeWhatsappComponent, {
            panelClass: 'dialog-reset',
            width: '400px',
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    connectWhatsappDialog(item: any) {
        const client = item;

        const dialogRef = this.dialog.open(connectWhatsappComponent, {
            panelClass: 'dialog-reset',
            width: '800px',
        });


        dialogRef.afterClosed().subscribe(result => {
            if (result.status === 'close') {
                this.connectContactID(client);
            }
        }
        );
    }

    setViewWidth() {
        const width = window.innerWidth;
        this.isMobile = false;
        if (width <= 640) {
            this.isMobile = true;
        }
    }



    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.setViewWidth()
    }
}

@Component({
    selector: 'add-whatsapp-dialog',
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule

    ],
    encapsulation: ViewEncapsulation.None,
    templateUrl: './add-whatsapp-dialog.component.html',
    styleUrl: './whatsapp.component.scss'
})

export class addWhatsappComponent {

    constructor(
        public dialogRef: MatDialogRef<addWhatsappComponent>,
    ) { }

    close() {
        this.dialogRef.close();
    }

    open() {
        this.dialogRef.close();
    }

}


@Component({
    selector: 'remove-whatsapp-dialog',
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule

    ],
    encapsulation: ViewEncapsulation.None,
    templateUrl: './remove-whatsapp-dialog.component.html',
    styleUrl: './whatsapp.component.scss'
})

export class removeWhatsappComponent {

    constructor(
        public dialogRef: MatDialogRef<removeWhatsappComponent>,
    ) { }

    close() {
        this.dialogRef.close({ status: 'close' });
    }

    open() {
        this.dialogRef.close();
    }

}


@Component({
    selector: 'connect-whatsapp-dialog',
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule

    ],
    encapsulation: ViewEncapsulation.None,
    templateUrl: './connect-whatsapp-dialog.component.html',
    styleUrl: './whatsapp.component.scss'
})

export class connectWhatsappComponent {

    constructor(
        public dialogRef: MatDialogRef<connectWhatsappComponent>,
    ) { }

    close() {
        this.dialogRef.close({ status: 'close' });
    }

    open() {
        this.dialogRef.close();
    }

}
