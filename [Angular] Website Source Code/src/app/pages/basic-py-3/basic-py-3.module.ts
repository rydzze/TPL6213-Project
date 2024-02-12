import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { BasicPy3 } from './basic-py-3.component'

const routes = [
  {
    path: '',
    component: BasicPy3,
  },
]

@NgModule({
  declarations: [BasicPy3],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [BasicPy3],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BasicPy3Module {}
