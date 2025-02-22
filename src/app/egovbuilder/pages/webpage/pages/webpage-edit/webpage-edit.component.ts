import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-webpage-edit',
    imports: [
        CommonModule,
        FormsModule
    ],
    templateUrl: './webpage-edit.component.html',
    styleUrl: './webpage-edit.component.scss'
})
export class WebpageEditComponent {


    public lstNews: any[] = [
        {
            id: 1,
            type: 1,
            type_description: 'Highlight',
            title: 'Title 1',
            description: 'Description 1',
            image: 'https://via.placeholder.com/150',
            date: '2021-07-01'

        },
        {
            id: 2,
            type: 2,
            type_description: 'seccondary',
            title: 'Title 2',
            description: 'Description 2',
            image: 'https://via.placeholder.com/150',
            date: '2021-07-02'
        },
        {
            id: 3,
            type: 3,
            type_description: 'common',
            title: 'Title 3',
            description: 'Description 3',
            image: 'https://via.placeholder.com/150',
            date: '2021-07-03'
        },
        {
            id: 4,
            type: 4,
            type_description: 'common',
            title: 'Title 4',
            description: 'Description 4',
            image: 'https://via.placeholder.com/150',
            date: '2021-07-04'
        },
    ]

}
