import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { BasicPy2a } from './basic-py-2a.component'

const routes = [
  {
    path: '',
    component: BasicPy2a,
  },
]

@NgModule({
  declarations: [BasicPy2a],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [BasicPy2a],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BasicPy2aModule {}
