import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { BasicPy2f } from './basic-py-2f.component'

const routes = [
  {
    path: '',
    component: BasicPy2f,
  },
]

@NgModule({
  declarations: [BasicPy2f],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [BasicPy2f],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BasicPy2fModule {}
