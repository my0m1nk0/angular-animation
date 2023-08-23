import { Component } from '@angular/core';
import {trigger,state,style,animate,transition} from '@angular/animations'
import { OPEN_CLOSE } from './open-close.anination';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styles: [
  '#target{height:400px;background-color:red;margin-top:30px;}'
  ],
 animations:[
 OPEN_CLOSE
]
  
})
export class OpenCloseComponent {

  isOpen=true

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
