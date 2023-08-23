import{trigger,animate,transition,style,state} from '@angular/animations'


export const enterLeave=trigger('openLeave',[
    transition(':leave',animate(500,style({transform :'translateX(100%)',opacity:0}))),

    transition(':enter',[
        style({transfom :'transaleX(-100%)',opacity:0.5}),
        animate(500,style({transform:'translateX(0)',opactiy:1}))
    ])
])