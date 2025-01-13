import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';

@Component({
    selector: 'app-whatsapp',
    imports: [
        CommonModule,
        MatRippleModule
    ],
    templateUrl: './whatsapp.component.html',
    styleUrl: './whatsapp.component.scss'
})
export class WhatsappComponent implements OnInit {

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

    constructor() { }

    ngOnInit(): void {
        this.filteredContacts = this.contactsList;
    }


    connectContactID(contact: any) {
        this.filteredContacts = this.contactsList.map((item: any) => {
            if (item.id === contact.id) {
                item.ativo = !item.ativo;
            }
            return item;
        });
    }
}
