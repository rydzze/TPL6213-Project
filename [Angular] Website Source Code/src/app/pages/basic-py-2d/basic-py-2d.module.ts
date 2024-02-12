import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { BasicPy2d } from './basic-py-2d.component'

const routes = [
  {
    path: '',
    component: BasicPy2d,
  },
]

@NgModule({
  declarations: [BasicPy2d],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [BasicPy2d],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BasicPy2dModule {}
