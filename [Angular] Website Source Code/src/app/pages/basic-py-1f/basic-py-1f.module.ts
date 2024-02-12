import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { BasicPy1f } from './basic-py-1f.component'

const routes = [
  {
    path: '',
    component: BasicPy1f,
  },
]

@NgModule({
  declarations: [BasicPy1f],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [BasicPy1f],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BasicPy1fModule {}
