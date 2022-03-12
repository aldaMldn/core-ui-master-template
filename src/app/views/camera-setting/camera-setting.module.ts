import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CameraSettingComponent } from './camera-setting.component';
import { CameraSettingRoutingModule } from './camera-setting-routing.module';


@NgModule({
  declarations: [CameraSettingComponent],
  imports: [
    CommonModule,
    CameraSettingRoutingModule
  ]
})
export class CameraSettingModule { }
