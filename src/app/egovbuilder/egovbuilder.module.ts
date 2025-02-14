import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { eGovBuilderRoutingModule } from './egovbuilder-routing.module';
import { MainNavBarComponent } from '../core/main-nav-bar/main-nav-bar.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    eGovBuilderRoutingModule,
    MainNavBarComponent
  ]
})
export class EgovbuilderModule { }
