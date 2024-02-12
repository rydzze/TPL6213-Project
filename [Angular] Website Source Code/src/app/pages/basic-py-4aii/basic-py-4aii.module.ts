import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { BasicPy4aii } from './basic-py-4aii.component'

const routes = [
  {
    path: '',
    component: BasicPy4aii,
  },
]

@NgModule({
  declarations: [BasicPy4aii],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [BasicPy4aii],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BasicPy4aiiModule {}
