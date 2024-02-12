import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { BasicPy1b } from './basic-py-1b.component'

const routes = [
  {
    path: '',
    component: BasicPy1b,
  },
]

@NgModule({
  declarations: [BasicPy1b],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [BasicPy1b],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BasicPy1bModule {}
