import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { BasicPy4bi } from './basic-py-4bi.component'

const routes = [
  {
    path: '',
    component: BasicPy4bi,
  },
]

@NgModule({
  declarations: [BasicPy4bi],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [BasicPy4bi],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BasicPy4biModule {}
