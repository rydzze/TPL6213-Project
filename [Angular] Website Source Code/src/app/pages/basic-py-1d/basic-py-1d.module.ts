import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { BasicPy1d } from './basic-py-1d.component'

const routes = [
  {
    path: '',
    component: BasicPy1d,
  },
]

@NgModule({
  declarations: [BasicPy1d],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [BasicPy1d],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BasicPy1dModule {}
