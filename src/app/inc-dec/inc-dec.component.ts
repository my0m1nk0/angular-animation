import { Component } from '@angular/core';
import {trigger,transition,animate,style,query} from '@angular/animations';

@Component({
  selector: 'app-inc-dec',
  templateUrl: './inc-dec.component.html',
  styles: [
  ],
  animations:[
    trigger('increDecre',[
        transition(':increment',[
          query(':enter',[
            style({width:'20%',opacity:0}),
            animate('5000ms ease-out',style({width:'*',opacity:'*'}))
          ],{optional:true})
        ]),
        transition(':decrement',[
          query(':leave',[
            animate('5000ms ease-in-out',style({width:'20%',opacity:0}))
          ],{
            optional:true
          })
        ])
    ])
    
    
  ]
})
export class IncDecComponent {

  list:string[]=[];

  add(element:any){
    if(element.value){
      this.list.push(element.value);
      element.value=''
    }
  }

  remove(index:number){
   this.list= this.list.filter((_,i)=> i != index )
  }

}
