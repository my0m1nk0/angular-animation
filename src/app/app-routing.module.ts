import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenCloseComponent } from './open-close/open-close.component';
import { EnterLeaveComponent } from './enter-leave/enter-leave.component';
import { IncDecComponent } from './inc-dec/inc-dec.component';

const routes: Routes = [
  {path:'open-close',component:OpenCloseComponent},
  {path:'enter-leave',component:EnterLeaveComponent},
  {path:'inc-dec',component:IncDecComponent},
  {path:'',redirectTo:'/open-close',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
