import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CameraSettingComponent } from './camera-setting.component';

const routes: Routes = [
  {
    path: '',
    component: CameraSettingComponent,
    data: {
      title: 'Camera Setting'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CameraSettingRoutingModule { }
