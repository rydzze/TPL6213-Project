import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { BasicPy4bv } from './basic-py-4bv.component'

const routes = [
  {
    path: '',
    component: BasicPy4bv,
  },
]

@NgModule({
  declarations: [BasicPy4bv],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [BasicPy4bv],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BasicPy4bvModule {}
