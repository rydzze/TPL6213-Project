import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { BasicPy2e } from './basic-py-2e.component'

const routes = [
  {
    path: '',
    component: BasicPy2e,
  },
]

@NgModule({
  declarations: [BasicPy2e],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [BasicPy2e],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BasicPy2eModule {}
