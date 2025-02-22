import { trigger, transition, query, style, stagger, animate, keyframes } from '@angular/animations';

export const popUp = trigger('popUp', [
    transition('* => *', [
        query(':enter', [
            style({ opacity: 0, transform: 'translateY(10px)', filter: 'brightness(0.5)'}),
            stagger(50, [
                animate('300ms cubic-bezier(0.35, 0, 0.25, 1)',
                    keyframes([
                        style({ opacity: 1, transform: 'translateY(0px)', offset: 1, filter: 'brightness(1)'  }),
                    ]),
                ),
            ]),
        ], { optional: true }),
    ]),
]);

export const popDown = trigger('popDown', [
    transition('* => *', [
        query(':enter', [
            style({ opacity: 0, transform: 'translateY(-10px)', filter: 'brightness(0.5)'}),
            stagger(50, [
                animate('300ms cubic-bezier(0.35, 0, 0.25, 1)',
                    keyframes([
                        style({ opacity: 1, transform: 'translateY(0px)', offset: 1, filter: 'brightness(1)'  }),
                    ]),
                ),
            ]),
        ], { optional: true }),
    ]),
]);

export const slideLeft = trigger('slideLeft', [
    transition('* => *', [
        query(':enter', [
            style({ opacity: 0, transform: 'translateX(10px)', filter: 'brightness(0.5)' }),
            stagger(50, [
                animate('300ms cubic-bezier(0.35, 0, 0.25, 1)',
                    keyframes([
                        style({ opacity: 1, transform: 'translateX(0px)', offset: 1, filter: 'brightness(1)' }),
                    ]),
                ),
            ]),
        ], { optional: true }),
    ]),
]);

export const slideRight = trigger('slideright', [
    transition('* => *', [
        query(':enter', [
            style({ opacity: 0, transform: 'translateX(-10px)', filter: 'brightness(0.5)' }),
            stagger(50, [
                animate('300ms cubic-bezier(0.35, 0, 0.25, 1)',
                    keyframes([
                        style({ opacity: 1, transform: 'translateX(0px)', offset: 1, filter: 'brightness(1)' }),
                    ]),
                ),
            ]),
        ], { optional: true }),
    ]),
]);

export const spinClockWise = trigger('spinClockWise', [
    transition('* => *', [
        query(':enter', [
            style({ opacity: 0, transform: 'rotate(0deg)', filter: 'brightness(0.5)' }),
            stagger(50, [
                animate('300ms cubic-bezier(0.35, 0, 0.25, 1)',
                    keyframes([
                        style({ opacity: 1, transform: 'rotate(360deg)', offset: 1, filter: 'brightness(1)' }),
                    ]),
                ),
            ]),
        ], { optional: true }),
    ]),
]);

export const spinCounterClockWise = trigger('spinCounterClockWise', [
    transition('* => *', [
        query(':enter', [
            style({ opacity: 0, transform: 'rotate(0deg)', filter: 'brightness(0.5)' }),
            stagger(50, [
                animate('300ms cubic-bezier(0.35, 0, 0.25, 1)',
                    keyframes([
                        style({ opacity: 1, transform: 'rotate(-360deg)', offset: 1, filter: 'brightness(1)' }),
                    ]),
                ),
            ]),
        ], { optional: true }),
    ]),
]);
