import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { SampleAppIntro } from './sample-app-intro.component'

const routes = [
  {
    path: '',
    component: SampleAppIntro,
  },
]

@NgModule({
  declarations: [SampleAppIntro],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [SampleAppIntro],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SampleAppIntroModule {}
