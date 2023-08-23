import { Component } from '@angular/core';
import { enterLeave } from './enter-leave.animation';

@Component({
  selector: 'app-enter-leave',
  templateUrl: './enter-leave.component.html',
  styleUrls:[
    './enter-leave.component.css',
    
  ],
  animations:[
    enterLeave
  ]
})
export class EnterLeaveComponent {
  page =1;

}
