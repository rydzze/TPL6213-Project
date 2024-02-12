import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { BasicPy4 } from './basic-py-4.component'

const routes = [
  {
    path: '',
    component: BasicPy4,
  },
]

@NgModule({
  declarations: [BasicPy4],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [BasicPy4],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BasicPy4Module {}
