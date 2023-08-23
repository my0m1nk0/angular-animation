import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EnterLeaveComponent } from './enter-leave/enter-leave.component';
import { IncDecComponent } from './inc-dec/inc-dec.component'
@NgModule({
  declarations: [
    AppComponent,
    OpenCloseComponent,
    EnterLeaveComponent,
    IncDecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
