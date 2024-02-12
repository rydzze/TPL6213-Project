import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { BasicPy1c } from './basic-py-1c.component'

const routes = [
  {
    path: '',
    component: BasicPy1c,
  },
]

@NgModule({
  declarations: [BasicPy1c],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [BasicPy1c],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BasicPy1cModule {}
