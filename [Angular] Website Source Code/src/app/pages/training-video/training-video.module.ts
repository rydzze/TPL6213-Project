import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { TrainingVideo } from './training-video.component'

const routes = [
  {
    path: '',
    component: TrainingVideo,
  },
]

@NgModule({
  declarations: [TrainingVideo],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [TrainingVideo],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TrainingVideoModule {}
