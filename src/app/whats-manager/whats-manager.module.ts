import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { whatsManagerRoutingModule } from './whats-manager-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { WhatsManagerComponent } from './whats-manager.component';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterOutlet,
    whatsManagerRoutingModule,
    WhatsManagerComponent,
    DashboardComponent,

  ]
})
export class WhatsManagerModule { }
