import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { BasicPy4ai } from './basic-py-4ai.component'

const routes = [
  {
    path: '',
    component: BasicPy4ai,
  },
]

@NgModule({
  declarations: [BasicPy4ai],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [BasicPy4ai],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BasicPy4aiModule {}
