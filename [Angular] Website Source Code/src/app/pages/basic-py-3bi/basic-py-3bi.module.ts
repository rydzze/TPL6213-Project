import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { BasicPy3bi } from './basic-py-3bi.component'

const routes = [
  {
    path: '',
    component: BasicPy3bi,
  },
]

@NgModule({
  declarations: [BasicPy3bi],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [BasicPy3bi],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BasicPy3biModule {}
