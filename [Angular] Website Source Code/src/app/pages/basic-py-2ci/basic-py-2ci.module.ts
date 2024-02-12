import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { BasicPy2ci } from './basic-py-2ci.component'

const routes = [
  {
    path: '',
    component: BasicPy2ci,
  },
]

@NgModule({
  declarations: [BasicPy2ci],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [BasicPy2ci],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BasicPy2ciModule {}
