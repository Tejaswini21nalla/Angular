import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendcomponentComponent } from './sendcomponent/sendcomponent.component';
import { ReceivecomponentComponent } from './receivecomponent/receivecomponent.component';

const routes: Routes = [
  {
    path: '',
    component: SendcomponentComponent
  },
  {
    path: 'receive',
    component: ReceivecomponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
