import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { BasicPy2 } from './basic-py-2.component'

const routes = [
  {
    path: '',
    component: BasicPy2,
  },
]

@NgModule({
  declarations: [BasicPy2],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [BasicPy2],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BasicPy2Module {}
