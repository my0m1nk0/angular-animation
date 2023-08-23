import { animate, state, style, transition, trigger } from "@angular/animations";

export const OPEN_CLOSE= trigger('openClose',[
    state('true',style({
      height:'400px'
    })),
    state('false',style({
      height:'100px'
    })),
    transition('* <=> *',[
      animate('5000ms ease-out')
    ])
    // ,
    // transition('close => open',[
    //   animate('5000ms ease-out')
    // ])

  
  ])