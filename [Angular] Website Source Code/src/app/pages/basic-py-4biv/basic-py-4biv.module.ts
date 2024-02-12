import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { BasicPy4biv } from './basic-py-4biv.component'

const routes = [
  {
    path: '',
    component: BasicPy4biv,
  },
]

@NgModule({
  declarations: [BasicPy4biv],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [BasicPy4biv],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BasicPy4bivModule {}
