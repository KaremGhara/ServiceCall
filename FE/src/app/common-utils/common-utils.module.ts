import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonUtilsRoutingModule } from './common-utils-routing.module';
import { ScreenContComponent } from './screen-cont/screen-cont.component';
import { ComponentsModule } from '../shared/components/components.module';
import { CommonService }from './classes/common.service';
import { WelcomePageComponent } from './welcome-page/welcome-page.component'

@NgModule({
  declarations: [
    ScreenContComponent,
    WelcomePageComponent
  ],
  imports: [
    CommonModule,
    CommonUtilsRoutingModule,
    ComponentsModule
  ],
  exports: [
    ScreenContComponent
    
  ],
  providers:[
  ]
})
export class CommonUtilsModule {
 

 }
