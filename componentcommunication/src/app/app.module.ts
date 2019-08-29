import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SendcomponentComponent } from './sendcomponent/sendcomponent.component';
import { ReceivecomponentComponent } from './receivecomponent/receivecomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    SendcomponentComponent,
    ReceivecomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
