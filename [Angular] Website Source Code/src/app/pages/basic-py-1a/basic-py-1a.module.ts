import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { BasicPy1a } from './basic-py-1a.component'

const routes = [
  {
    path: '',
    component: BasicPy1a,
  },
]

@NgModule({
  declarations: [BasicPy1a],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [BasicPy1a],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BasicPy1aModule {}
