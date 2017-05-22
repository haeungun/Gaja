import { trigger, state, animate, transition, style } from '@angular/animations';
 
export const flyInOut =
    trigger('flyInOut', [
        state('in', style({opacity: 1, transform: 'translateX(0)'})),
        
        transition(":enter", [ // Enter: void => *
            style({
                opacity: 0,
                transform: 'translateX(-100%)'
            }),
            animate('0.2s ease-in')
        ]),
        transition(":leave", [ // Leave: * => void
            animate('0.2s 10 ease-out', style({
                opacity: 0,
                transform: 'translateX(100%)'
            }))
        ])
    ]);