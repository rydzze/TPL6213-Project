import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { BasicPy1 } from './basic-py-1.component'

const routes = [
  {
    path: '',
    component: BasicPy1,
  },
]

@NgModule({
  declarations: [BasicPy1],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [BasicPy1],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BasicPy1Module {}
