import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { whatsManagerRoutingModule } from './whats-manager-routing.module';
import { WhatsManagerComponent } from './whats-manager.component';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    whatsManagerRoutingModule,
    WhatsManagerComponent,

  ]
})
export class WhatsManagerModule { }
