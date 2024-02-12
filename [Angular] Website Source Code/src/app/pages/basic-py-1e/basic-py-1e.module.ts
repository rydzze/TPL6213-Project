import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { BasicPy1e } from './basic-py-1e.component'

const routes = [
  {
    path: '',
    component: BasicPy1e,
  },
]

@NgModule({
  declarations: [BasicPy1e],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [BasicPy1e],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BasicPy1eModule {}
