import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { BasicPy2b } from './basic-py-2b.component'

const routes = [
  {
    path: '',
    component: BasicPy2b,
  },
]

@NgModule({
  declarations: [BasicPy2b],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [BasicPy2b],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BasicPy2bModule {}
