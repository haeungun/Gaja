import { trigger, state, animate, transition, style } from '@angular/animations';
 
export const slideInOutAnimation =
    trigger('slideInOutAnimation', [
        transition(':enter', [
            style({opacity:0}),
            animate('.5s ease-in-out', style({opacity:1}))
        ]),
        transition(':leave', [
            animate('.5s ease-in-out', style({opacity:0}))
        ])
    ]);